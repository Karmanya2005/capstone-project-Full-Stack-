export const careers=[
{title:"Frontend Developer",description:"Build responsive web applications.",skills:[["HTML & CSS",4],["JavaScript",5],["React",4],["Git",3],["REST APIs",3]]},
{title:"Backend Developer",description:"Build server-side systems and APIs.",skills:[["JavaScript",4],["Node.js",5],["Express",4],["MongoDB",4],["REST APIs",4]]},
{title:"Data Analyst",description:"Find insights in data.",skills:[["Python",4],["SQL",5],["Excel",3],["Statistics",4],["Data Visualization",3]]},
{title:"AI/ML Engineer",description:"Build intelligent data-driven systems.",skills:[["Python",5],["Statistics",4],["Machine Learning",4],["SQL",3],["Data Visualization",3]]}
].map((c,i)=>({id:String(i+1),...c,skills:c.skills.map(([name,required])=>({name,required,priority:required>=4?"High":"Medium"}))}));