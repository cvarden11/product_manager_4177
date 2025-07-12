import swaggerJsDoc from "swagger-jsdoc"

const options = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"4177 Tutorial",
            version:"1.0.0",
            description:"API docs",
            contact:{
                name:"Caiya Varden",
                email:"caiyavarden@dal.ca",
            },
        },
        servers:[{url:"https://localhost:5400"}]
    },
    apis:["../backend/routes/*.js"],
}

const swaggerSpec = swaggerJsDoc(options);

export default swaggerSpec;