var synaptic = require('synaptic');

var Neuron = synaptic.Neuron

var A = new Neuron();
var B = new Neuron();
var connection = A.project(B); // A now projects a connection to B

// for(var i = 0; i<=1; i+= 0.01){
//   console.log(A.activate(i).toFixed(3), B.activate().toFixed(3));
// }

var learningRate = 50;

for(var i = 0; i < 100; i++){
  // when A activates 1
  A.activate(1);

  // train B to activate 0
  B.activate();
  B.propagate(learningRate, 0);
}

console.log(B.activate());

