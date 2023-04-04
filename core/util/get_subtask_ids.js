module.exports = () => {
    try {
        return global.client.subtasks.map(item => item.subtask_id);
    } catch {
        return false;
    } 
}