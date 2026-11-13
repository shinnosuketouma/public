(() => {
  const c=window.SITE_CONTENT;
  const tabs=[...document.querySelectorAll('[data-room]')];
  const panel=document.getElementById('room-panel');
  const photo=panel.querySelector('img');
  const roomSelect=document.getElementById('booking-room');
  const guests=document.getElementById('guests');
  const arrival=document.getElementById('arrival');
  const departure=document.getElementById('departure');
  const error=document.getElementById('booking-error');
  const dialog=document.getElementById('booking-dialog');
  const currency=new Intl.NumberFormat('ja-JP',{style:'currency',currency:'JPY',maximumFractionDigits:0});
  [...roomSelect.options].forEach((option,i)=>{option.textContent=c.rooms[i].name;});
  [...guests.options].forEach((option,i)=>{option.textContent=c.booking['guest'+String(i+1)];});
  document.getElementById('hero-room-price').textContent=currency.format(Math.min(...c.rooms.map(room=>room.price)))+'〜';
  let selectedRoom=0;
  function setRoom(index,focus=false){
    selectedRoom=index;const room=c.rooms[index];
    tabs.forEach((tab,i)=>{const active=i===index;tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
    panel.setAttribute('aria-labelledby',tabs[index].id);
    ['english','name','description','size','capacity','bed','amenities'].forEach(key=>document.getElementById('room-'+key).textContent=room[key]);
    document.getElementById('room-price').textContent=currency.format(room.price)+'〜';
    const asset=c.assets[room.image];photo.src=asset.url;photo.alt=asset.alt;photo.style.objectPosition=asset.position;
    roomSelect.value=String(index);error.hidden=true;
    if(focus)tabs[index].focus();
  }
  tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>setRoom(index));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();setRoom(next,true);}});});
  roomSelect.addEventListener('change',()=>setRoom(Number(roomSelect.value)));
  document.getElementById('plan-selected-room').addEventListener('click',()=>{roomSelect.value=String(selectedRoom);});
  function isoLocal(date){return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');}
  const today=isoLocal(new Date());arrival.min=today;departure.min=today;
  if(c.booking.defaultArrival>=today){arrival.value=c.booking.defaultArrival;departure.value=c.booking.defaultDeparture;}else{const start=new Date();start.setDate(start.getDate()+7);arrival.value=isoLocal(start);start.setDate(start.getDate()+1);departure.value=isoLocal(start);}
  arrival.addEventListener('change',()=>{if(arrival.value){departure.min=arrival.value;if(departure.value<=arrival.value){const next=new Date(arrival.value+'T12:00:00');next.setDate(next.getDate()+1);departure.value=isoLocal(next);}}error.hidden=true;});
  function showError(message){error.textContent=message;error.hidden=false;error.setAttribute('tabindex','-1');error.focus();}
  document.getElementById('booking-form').addEventListener('submit',event=>{
    event.preventDefault();error.hidden=true;
    const a=arrival.value,d=departure.value,people=Number(guests.value),room=c.rooms[Number(roomSelect.value)];
    if(!a||!d||d<=a){showError(c.booking.errorDates);return;}
    if(a<today){showError(c.booking.errorPast);return;}
    const nights=Math.round((Date.parse(d+'T00:00:00Z')-Date.parse(a+'T00:00:00Z'))/86400000);
    if(!Number.isFinite(nights)||nights<1||nights>30){showError(c.booking.errorNights);return;}
    if(people>room.maxGuests){showError(c.booking.errorCapacity);return;}
    const total=(room.price+Math.max(0,people-2)*c.booking.extraGuestPrice)*nights;
    document.getElementById('estimate-room').textContent=room.name;
    document.getElementById('estimate-dates').textContent=a.replaceAll('-',' / ')+' — '+d.replaceAll('-',' / ');
    document.getElementById('estimate-guests').textContent=String(people)+c.booking.guestUnit+' / '+String(nights)+c.booking.nightUnit;
    document.getElementById('estimate-price').textContent=currency.format(total);
    dialog.showModal();
  });
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  setRoom(0);
})();
