const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

let packageElement = document.getElementById("package-to")
function drawPackages(package) {
  let template = ''
  package.packages.forEach(p => {
    template += p[3]
  });
  packageElement?.innerText = template
}
// drawPackages()

function heavyPackages() {
  console.log('heavy packages');
  let heavyWeight = packages.filter(hp => hp.weight > 4)
  console.log(heavyWeight);
  drawPackages(heavyPackages)
}

heavyPackages()




// function fragilePackages() {
//   console.log('fragile package');
//   const isPackageFragile = packages.filter(hp => hp.isFragile)
//   console.log(isPackageFragile, "is fragile");
//   drawToPackages(fragilePackages)

// }

// fragilePackages()