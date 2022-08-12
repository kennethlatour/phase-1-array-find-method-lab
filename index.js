//   function superbowlWin (result) {
//     record.result === 'W';
//     return
//     }
// record.find(superbowlWin).year
function superbowlWin(array){
    const newObj = array.find(array => array.result === 'W')
    return newObj ? newObj.year : undefined
}