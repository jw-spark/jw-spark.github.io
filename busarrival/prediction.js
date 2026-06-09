// Simple prediction (average wait)
function predictWait(records){
    let total = 0;
    records.forEach(r=>{
        const diff = (new Date(r.estimated_arrival) - new Date(r.collected_at))/60000;
        total += diff;
    });
    return total/records.length;
}
