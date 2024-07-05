//kumpulan khodam menggunakan tipe data array
const khodam = [
    "Skibidi Toilet",
    "Mio Mirza",
    "Monyet Mewing",
    "Kripik Kaca Terlupakan Well",
    "Harimau Sumatra",
    "Ambatron",
    "Ambatukam",
    "Ngawi",
    "Lucu Banget Loh Rek🤓",
    "Kaicenat",
    "Fanum Tax",
    "Mio Karbu",
    "Aerox"
]
let inputuser = document.getElementById("inputuser");
let container = document.getElementById("container");
let containerNew = document.getElementById("containernew");
let noinput = document.getElementById("noinput");
let creator = document.getElementById("creator");
function cek(){
    if((inputuser.value.trim() === "")){
        alert("Input tidak boleh Kosong");
        noinput.style.display = "block";
    }
    else{
        //menghapus dan mengganti container sebelumnya.
        document.body.removeChild(container);
        containerNew.style.display = 'block';
        creator.style.display = "none";
        //mekanisme random
        const hasilKhodam = khodam[Math.floor(Math.random() * khodam.length)];
        //
        let paragraf = document.createElement("p");
        let blankDiv = document.createElement("div");
        let gantiNamaButton = document.createElement("button");
        paragraf.innerHTML = "Nama kamu " + inputuser.value + " khodam mu adalah....";
        containerNew.className = "backdrop-blur-md text-center  bg-white bg-opacity-10 p-6 rounded-lg";
        blankDiv.className = "text-center text-white font-bold text-[30px] m-4 "
        paragraf.className = "text-white";
        gantiNamaButton.className = "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
        blankDiv.innerHTML = "😱 " + hasilKhodam + " 😱";
        gantiNamaButton.textContent = "Coba lagi!"
        containerNew.append(paragraf);
        containerNew.append(blankDiv);
        containerNew.append(gantiNamaButton);
        gantiNamaButton.addEventListener("click", function(){
            window.location.reload();
        })
    }
}