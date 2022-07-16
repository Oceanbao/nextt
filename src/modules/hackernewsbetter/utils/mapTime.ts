export default function getElapsedTime(timestamp: number | undefined) {
  if (!timestamp) return
  // get total seconds between the times
  let delta = Math.abs(new Date().getTime() / 1000 - timestamp)
  // calculate (and subtract) whole days
  let days = Math.floor(delta / 86400)
  if (days) return `${days} days ago`
  delta -= days * 86400
  // calculate (and subtract) whole hours
  let hours = Math.floor(delta / 3600) % 24
  if (hours) return `${hours} hours ago`
  delta -= hours * 3600
  // calculate (and subtract) whole minutes
  let minutes = Math.floor(delta / 60) % 60
  if (minutes) return `${minutes} minutes ago`
  delta -= minutes * 60
  // what's left is seconds
  let seconds = delta % 60
  return `${seconds} seconds ago`
}

// export default function mapTime(timestamp) {
//   const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

//   let interval = Math.floor(seconds / 31536000);

//   if (interval > 1) {
//     return `${interval} years`;
//   }
//   interval = Math.floor(seconds / 2592000);

//   if (interval > 1) {
//     return `${interval} months`;
//   }
//   interval = Math.floor(seconds / 86400);

//   if (interval > 1) {
//     return `${interval} days`;
//   }
//   interval = Math.floor(seconds / 3600);

//   if (interval > 1) {
//     return `${interval} hours`;
//   }
//   interval = Math.floor(seconds / 60);

//   if (interval > 1) {
//     return `${interval} minutes`;
//   }

//   return `${Math.floor(seconds)} seconds`;
// }
