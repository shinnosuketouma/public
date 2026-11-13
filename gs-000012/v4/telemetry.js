/* Bounded, loss-revealing motion telemetry for gs-000012 v2. No frame-time outlier filter. */
(() => {
  function create({windowMs=20000,maxSamples=8192,maxLongTasks=128}={}) {
    const capacity=Math.max(1,Math.floor(maxSamples));
    const frames=new Array(capacity);let head=0,size=0,activeClock=0,sumMs=0,truncated=false;
    let lcpMs=null,clsMax=0,sessionValue=0,sessionStart=null,lastShift=null,lastTimestamp=0;
    let tasks=[];const supported={lcp:false,cls:false,longtask:false};
    function removeOldest(){if(!size)return;sumMs-=frames[head].ms;frames[head]=undefined;head=(head+1)%capacity;size--;}
    function pruneTasks(timestamp){const cutoff=timestamp-windowMs;tasks=tasks.filter(item=>item.startTime+item.duration>=cutoff);if(tasks.length>maxLongTasks)tasks=tasks.slice(-maxLongTasks);}
    function recordFrame(rawIntervalMs,timestamp) {
      if(!Number.isFinite(rawIntervalMs)||rawIntervalMs<=0||!Number.isFinite(timestamp))return;
      activeClock+=rawIntervalMs;lastTimestamp=Math.max(lastTimestamp,timestamp);
      const cutoff=activeClock-windowMs;
      while(size&&frames[head].activeEnd<=cutoff)removeOldest();
      if(size===capacity){removeOldest();truncated=true;}
      frames[(head+size)%capacity]={at:timestamp,ms:rawIntervalMs,activeEnd:activeClock};size++;sumMs+=rawIntervalMs;
      pruneTasks(lastTimestamp);
    }
    function recordLcp(value){if(Number.isFinite(value)&&value>=0)lcpMs=value;}
    function recordLayoutShift({startTime,value,hadRecentInput=false}) {
      if(hadRecentInput||!Number.isFinite(startTime)||!Number.isFinite(value)||value<0)return;
      if(sessionStart===null||startTime-lastShift>=1000||startTime-sessionStart>=5000){sessionStart=startTime;sessionValue=value;}else sessionValue+=value;
      lastShift=startTime;clsMax=Math.max(clsMax,sessionValue);
    }
    function recordLongTask({startTime,duration}){if(!Number.isFinite(startTime)||!Number.isFinite(duration)||duration<0)return;lastTimestamp=Math.max(lastTimestamp,startTime+duration);tasks.push({startTime,duration});pruneTasks(lastTimestamp);}
    function setSupported(values){for(const key of Object.keys(supported))if(Object.hasOwn(values,key))supported[key]=values[key]===true;}
    function snapshot({includeRaw=true}={}) {
      const samples=[];for(let i=0;i<size;i++)samples.push(frames[(head+i)%capacity]);
      const sorted=samples.map(item=>item.ms).sort((a,b)=>a-b);
      const quantile=q=>sorted.length?sorted[Math.min(sorted.length-1,Math.floor(sorted.length*q))]:null;
      return {protocol:'active-window-v2',windowMs,capacity,sampleCount:size,activeMs:Math.max(0,sumMs),totalActiveMs:activeClock,truncated,windowOverrunMs:Math.max(0,sumMs-windowMs),intervals:includeRaw?samples.map(({at,ms,activeEnd})=>({at,ms,activeEnd})):undefined,medianFrameMs:quantile(.5),p95FrameMs:quantile(.95),effectiveFps:sumMs>0?size*1000/sumMs:null,lcpMs:supported.lcp?lcpMs:null,cls:supported.cls?clsMax:null,longTasks:supported.longtask?tasks.map(item=>({...item})):null,supported:{...supported},clsSession:{startTime:sessionStart,lastShift,value:sessionValue,maxSession:clsMax}};
    }
    return {recordFrame,recordLcp,recordLayoutShift,recordLongTask,setSupported,snapshot};
  }
  globalThis.TsuzumeTelemetry={create};
})();
