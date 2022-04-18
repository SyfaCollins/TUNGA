const students = {
    1293:{
    'name': 'student1',
    'age': 14,
    'classes':['math','physics'],
    },

    1245:{
    'name': 'student2',
    'age': 20,
    'classes':['math','history']
    },

    1235:{
        'name': 'student3',
        'age': 18,
        'classes':['math','Geo']
        }

}

function checkProperty(prop,item,value){

 
    
    if(prop in students){

       if(students[prop][item] !== "" ){
        //    let result = push(value)
            console.log(students[prop][item].value)
       }

    }else{
        console.log('No such property')
    }
}


checkProperty(1235,'classes','Grammy')