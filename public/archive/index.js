function createICS() {
    let title = document.getElementById('title').value;
    let start = new Date(document.getElementById('start').value);
    let end = new Date(document.getElementById('end').value);
    let location = document.getElementById('location').value;
    let description = document.getElementById('description').value;

    let startStr = start.toISOString().replace(/-|:|\.\d+/g, "");
    let endStr = end.toISOString().replace(/-|:|\.\d+/g, "");

    let icsContent = `BEGIN:VCALENDAR
        VERSION:2.0
        BEGIN:VEVENT
        SUMMARY:${title}
        DTSTART:${startStr}
        DTEND:${endStr}
        LOCATION:${location}
        DESCRIPTION:${description}
        END:VEVENT
        END:VCALENDAR`;

    let blob = new Blob([icsContent], { type: "text/calendar" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "appointment.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}