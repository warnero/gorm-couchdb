
function(doc) {
    if (doc.meta == 'project-task' && doc.completionDate == null) {
        emit(doc.name, null);
    }
}