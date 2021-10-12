biodata = {
  nama: "Indra Agustiansyah",
  umur: 30,
  alamat: {
    namajalan: "jl raya salabenda",
    rt: "004",
    rw: "002",
    no: 7,
    kecamatan: "Kemang",
    kelurahan: "salabenda",
    kota: "Kabupaten Bogor",
    provinsi: "Jawa Barat",
  },
  jeniskelamin: "Laki - Laki",
  hobi: ["baca, renang, searching"],
};

console.log(biodata);

function lingkaran(r) {
  const phi = 22 / 7;
  var luas = phi * r * r;

  return luas;
}
console.log(lingkaran(7));

function HitungVolumeKubus(sisi) {
  var luas = sisi * sisi * sisi;

  return luas;
}

console.log(HitungVolumeKubus(10));

/* buat 2 kelas

- kelas pertama adalah Human
- kelas kedua adalah Programmer

Programmer adalah turunan Human

Human mempunyai properti name, age

Programmer mempunyai properti name, age, languages

Human mempunyai metode:
- sleep

Programmer mempunyai metode:
- coding */

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  Sleep() {
    console.log(`Hi, My Name is ${this.name} and My Ages is ${this.age}`);
  }
}

class Programer extends Human {
  constructor(name, age, languages) {
    super(name, age);
    this.languages = languages;
  }

  Coding() {
    super.Sleep();
    console.log(`Love Coding Languages is ${this.languages}`);
  }
}

let Roma = new Human("Indra Agustiansyah", 30);
let Ani = new Programer("Indra Agustiansyah", 30, ["php", "javascript"]);

Roma.Sleep();
Ani.Coding();

// PERTEMUAN ke tiga chapter 4
class Saya {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  Salam() {
    console.log(`Hi, My Name is ${this.name} usiaku   ${this.age}`);
  }
  _Bekerja() {
    console.log(`Saya kerja di rumah`);
  }
  #hobi() {
    console.log(`Hobbi-ku lari`);
  }
}

/* class Manusia extends Dia {
  constructor(name, age, hobby) {
    super(name, age);
    this.hobby = hobby;
  }
} */

class Dia {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  Bekerja() {
    console.log(`Saya kerja di rumah`);
  }
}

class Tentara extends Dia {
  constructor(name, age) {
    super(name,age)
    this.name = name;
    this.age = age;
  }
  menolong() {
    console.log("Salah satu hobbinya adalah menolong !");
  }

  berperang() {
    this.menolong()
    super.Bekerja()
  }
}


const ani = new Dia("Indra Agustiansyah",25)
ani.Bekerja()

const roma = new Tentara ("Indra", 25)
roma.berperang()