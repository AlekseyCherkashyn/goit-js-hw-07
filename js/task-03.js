const gallery = document.querySelector("#gallery");
gallery.classList.add("list");
gallery.classList.add("card-set");

const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const listInsert = function (list) {
  const markUpString = list.reduce(
      (string, item) => string +
          `<li class="card-set__item">
          <img src="${item.url} alt="${item.alt}" width="280px" height="160">
          </li>`, "");
    gallery.insertAdjacentHTML('afterbegin', markUpString);
    return markUpString;
}
listInsert(images);
