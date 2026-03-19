gsap.to(".box1", {
    x: 400,
    duration: 3,
    rotate: 180,
    backgroundColor: "blue",
    delay: 1,
    repeat: -1,
    yoyo: true
})

// gsap.to(".box2",{
//     x: 300,
//     // y:300,
//     duration: 2,
//     delay: 1
// })

gsap.from(".box2", {
    x: 300,
    duration: 3,
    delay: 1,
    rotate: 180,
    backgroundColor: "crimson",
    repeat: -1,
    yoyo: true
})

// gsap.from("h1", {
//     y: 50,
//     opacity: 0,
//     duration: 2,
//     delay: 1,
//     stagger: 1,    // here stagger basically do the work of one h1 after another that means after the first h1 will do the work after that the second h1 will do the work..
//     repeat: -1, // basically when we want any task to be repeated we will write the repeat keyword to reapest any thing ->{if i want to repeat any task for infinite times we will simpley give the value of repeat (-1) }..
//     yoyo: true // So basically if we want to performe any task like ->( rebouning )  or like do anything to just repeat the same thing but not from the initial position where they started but from the final position where they had end so we will use yoyo .. 
// })

 var tml = gsap.timeline()  //if we want to execute one thing after another then we will simpley use ->{timeline} and store in a variable and use it as (gsap)..

tml.from("h2", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: .5
})
tml.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:.5
})
tml.from("h1",{
    opacity:0,
    // y:-30,
    duration:1,
    scale:.5
})