
const calendar = document.getElementById("calendar");

// Create calendar days (1-31)
for (let i = 1; i <= 31; i++) {
  const day = document.createElement("div");
  day.classList.add("day");
  day.textContent = i;

  day.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  day.addEventListener("drop", (event) => {
    event.preventDefault();
    const eventId = event.dataTransfer.getData("text/plain");
    const draggedEvent = document.getElementById(eventId);

    // Read data from the dragged event
    const eventTitle = draggedEvent.textContent;
    const eventDay = draggedEvent.dataset.day; // Assuming you have data-day attribute

    // Log the data
    console.log("Dragged Event:", eventTitle);
    console.log("Original Day:", eventDay);

    // Append the dragged event to the new day
    event.target.appendChild(draggedEvent);

    // Update the event's day data attribute
    draggedEvent.dataset.day = event.target.textContent; 
    console.log("New Day:", draggedEvent.dataset.day); 
  });

  calendar.appendChild(day);
}

// Create sample events with data-day attributes
const eventsData = [
  { id: "event1", title: "Event 1", day: 1 },
  { id: "event2", title: "Event 2", day: 15 },
  { id: "event3", title: "Event 3", day: 22 },
];

eventsData.forEach((eventData) => {
  const event = document.createElement("div");
  event.classList.add("event");
  event.textContent = eventData.title;
  event.id = eventData.id;
  event.draggable = true;
  event.dataset.day = eventData.day; // Set initial day

  event.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  });

  const dayIndex = eventData.day - 1; // Adjust for 0-based index
  calendar.children[dayIndex].appendChild(event);
});

