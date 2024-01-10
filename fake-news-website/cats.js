const cats = [
    {
        name:" Cat1",
        age: 2
    },
    {
        name: " Cat2",
        age: 3
    },
    {
        name: " Cat3",
        age: 4
    }
];

function getName(list){
    for(let i=0; i< list.length; i++){
        console.log(list[i].name);
    }
}
 