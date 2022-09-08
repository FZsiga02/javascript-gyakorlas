let t = [];



for (i=0; i<=20; i++)
{
    var macska = 
    {
        nev: "Cirmos"+i,
        eletkor: Math.round((Math.random()*10)+2,0)
    }
    t.push(macska)
}

for (i=0; i<t.length; i++)
{
    if (t[i].eletkor==2)
    {
        console.log(t[i].nev+" "+t[i].eletkor)
    }
}