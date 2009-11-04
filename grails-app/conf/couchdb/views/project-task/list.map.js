
function(doc) {
    if (doc.meta == 'project-task') {
        emit([doc.projectId, doc.name], {name:doc.name, startDate:doc.startDate, completionDate:doc.completionDate, estimatedHours:doc.estimatedHours, actualHours:doc.actualHours});
    }
}
