
document.getElementById('pledge-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
     const action = document.getElementById('action').value;
    
    document.getElementById('user-pledge').innerText = action;
    
      document.getElementById('thank-you-message').style.display = 'block';
    document.getElementById('pledge-form').style.display = 'none';
});


const organizations = [
    { name: 'Climate Action Fund', url: 'https://www.climateaction.org' },
    
    { name: 'Earth Protectors', url: 'https://www.earthprotectors.org' },
    { name: 'Greenpeace', url: 'https://www.greenpeace.org' }
];

const events = [
    { name: 'Tree Planting Event', date: 'August 15, 2024' },
   
    { name: 'Beach Cleanup', date: 'September 5, 2024' },
    { name: 'Climate Change Rally', date: 'October 10, 2024' }
];

const orgList = document.getElementById('organizations');
for (let i = 0; i < organizations.length; i++) {
    const org = organizations[i];
    
     const li = document.createElement('li');
    
    const a = document.createElement('a');
    a.href = org.url;
    a.textContent = org.name;
     a.target = '_blank';
     li.appendChild(a);
    orgList.appendChild(li);
}

const eventList = document.getElementById('events');
for (let j = 0; j < events.length; j++) {
      const event = events[j];
    const li = document.createElement('li');
    
    li.textContent = `${event.name} - ${event.date}`;
    
    eventList.appendChild(li);
}