var images=["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://us.123rf.com/450wm/tigatelu/tigatelu1510/tigatelu151000225/46054601-illustration-of-father-giving-his-son-piggyback-ride-.jpg?ver=6", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Sd4KaLpb-dZwiz24J4bBg2XNceOQzcG4JA&usqp=CAU", "https://i.pinimg.com/736x/77/d4/15/77d41520a3f07995b184797a3734bf44.jpg", "https://i.pinimg.com/474x/45/1a/e8/451ae8dae3755c17c0ba983c290ebfe2--anime-guys-anime-manga.jpg", "https://thumbs.dreamstime.com/z/family-parents-childrens-cartoons-dad-mom-two-little-boys-playing-ball-vector-illustration-graphic-design-153411874.jpg"];
var names=[ "Family Book", "Raja Mohan(Dad)", "Vaishnavi(Mom)", "Me", "Koushik(My Brother)", "My Family"];
var i=0;

function update()
{
i++
var family_length= 5;
if(i > family_length){
    i=1
}
var updated_Image = images[i];
var updated_Name = names[i];  

document.getElementById("family_member_image").src= updated_Image;
document.getElementById("family_member_name").innerHTML= updated_Name;
}