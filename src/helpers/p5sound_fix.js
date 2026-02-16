import * as p5 from 'p5'
window.p5 = p5

// Disable AudioWorklet to prevent RingBuffer race condition in p5.sound 1.3.1
// Forces fallback to ScriptProcessorNode which doesn't have this bug
window.AudioWorkletNode = undefined
