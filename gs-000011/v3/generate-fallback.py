"""Generate original SVG fallback renders from Sound Studies' own parametric geometry."""
from pathlib import Path
from math import sin, cos, pi, sqrt

ROOT = Path(__file__).parent

def add(a,b): return tuple(x+y for x,y in zip(a,b))
def mul(a,n): return tuple(x*n for x in a)
def dot(a,b): return sum(x*y for x,y in zip(a,b))
def sub(a,b): return tuple(x-y for x,y in zip(a,b))
def norm(a): return mul(a, 1/max(1e-9,sqrt(dot(a,a))))
def cross(a,b): return (a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0])
def rx(p,a): return (p[0],p[1]*cos(a)-p[2]*sin(a),p[1]*sin(a)+p[2]*cos(a))
def ry(p,a): return (p[0]*cos(a)+p[2]*sin(a),p[1],-p[0]*sin(a)+p[2]*cos(a))
def rz(p,a): return (p[0]*cos(a)-p[1]*sin(a),p[0]*sin(a)+p[1]*cos(a),p[2])
def transform(p): return rz(ry(rx(p,.5),-.36),-.29)
def surf(u,v,layer,kind):
 t,a=u*pi*2,v*pi*2
 if kind==0: center=((1.32+.22*cos(t*3))*cos(t),1.25*sin(t),.49*sin(t*2))
 elif kind==1: center=(1.63*cos(t),.89*sin(t)+.14*sin(t*2),.43*sin(t*3))
 else: center=(1.6*cos(t),1.45*sin(t),.12*cos(t*2))
 center=mul(center,1-layer*.075)
 normal=norm((cos(t),sin(t),.14*cos(2*t)))
 tangent=norm((-sin(t),cos(t),.45*cos(t*2)))
 binormal=norm(cross(tangent,normal))
 twist=t*[1.5,.72,.28][kind]+layer*.9
 broad=add(mul(normal,cos(twist)),mul(binormal,sin(twist)))
 thin=add(mul(normal,-sin(twist)),mul(binormal,cos(twist)))
 width=(.44+.08*sin(t*3+layer))*(.75 if kind==2 else 1)
 rib=(.5+.5*cos(t*118+layer*.9))**2.2*.025
 p=add(add(center,mul(broad,cos(a)*(width+rib))),mul(thin,sin(a)*(.055+rib*.32)))
 return transform(rz(ry(p,(layer-1)*.22),(layer-1)*.34))
def project(p):
 f=2.52/(6.45-p[2]);return (400+p[0]*f*400,400-p[1]*f*400)
def smooth(lo,hi,x):
 t=max(0,min(1,(x-lo)/(hi-lo)));return t*t*(3-2*t)
def color(u,v,l,kind,p):
 n=norm(cross(sub(surf(u+.00005,v,l,kind),surf(u-.00005,v,l,kind)),sub(surf(u,v+.0001,l,kind),surf(u,v-.0001,l,kind))))
 view=norm(sub((0,0,6.45),p))
 if dot(n,view)<0:n=mul(n,-1)
 r=sub(mul(n,2*dot(view,n)),view)
 key=smooth(.55,.95,dot(r,norm((-1,1.8,1.1))))
 strip=smooth(.91,.99,dot(r,norm((1.6,.35,1))))
 top=smooth(.65,.94,dot(r,norm((.15,2,-.4))))
 rim=(1-max(dot(n,view),0))**3
 ambient=.10+.17*max(n[1],0)
 shade=.72+.28*max(dot(n,norm((-1,1,2))),0)
 metal=[(.59,.24,.105),(.68,.72,.70),(.76,.71,.58)][kind]
 white=(1,.96,.86)
 c=[metal[i]*(ambient+key*.78+top*.33)*shade+white[i]*key**6*.9+(.98,.98,.91)[i]*strip*.8+(.68,.70,.65)[i]*rim*.38 for i in range(3)]
 c=[(x/(x+.62))**.91 for x in c]
 return '#'+''.join(f'{round(max(0,min(1,x))*255):02x}' for x in c)

for kind,name in enumerate(('ember','tidal','halo')):
 quads=[];steps,sides=156,12
 for layer in range(3):
  for i in range(steps):
   for j in range(sides):
    points=[surf(i/steps,j/sides,layer,kind),surf((i+1)/steps,j/sides,layer,kind),surf((i+1)/steps,(j+1)/sides,layer,kind),surf(i/steps,(j+1)/sides,layer,kind)]
    center=mul(tuple(sum(p[k] for p in points) for k in range(3)),.25)
    fill=color((i+.5)/steps,(j+.5)/sides,layer,kind,center)
    coords=' '.join(f'{x:.1f},{y:.1f}' for x,y in map(project,points))
    quads.append((center[2],f'<polygon points="{coords}" fill="{fill}" stroke="{fill}" stroke-width=".4"/>'))
 quads.sort(key=lambda item:item[0])
 svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" role="img"><title>Sound Studies '+name+'</title>'+''.join(q[1] for q in quads)+'</svg>'
 (ROOT/f'sculpture-{name}.svg').write_text(svg)
 print(name,len(svg.encode()))
