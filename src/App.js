import './App.css';
import ItemCard from './Components/ItemCard/ItemCard';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  var Items = [
    {
      "imgLink" : "https://cdn.pixabay.com/photo/2017/09/14/11/47/japan-2748735_1280.jpg",
      "title" : "Shoe",
      "description" : "This is a very elgent and stupid design ever build for a shoe which no one wants to wear. Bhagwan aapki aatma ko shanti de kyunki jeete jee to apko shanti nahi milne wali kyunki shanti rajesh se pyaar karti hai.",
      "rating" : "4.5",
      "price" : "$4.90"
    },
    {
      "imgLink" : "https://cdn.pixabay.com/photo/2017/09/14/11/47/japan-2748735_1280.jpg",
      "title" : "Shoe",
      "description" : "This is a very elgent and stupid design ever build for a shoe which no one wants to wear. Bhagwan aapki aatma ko shanti de kyunki jeete jee to apko shanti nahi milne wali kyunki shanti rajesh se pyaar karti hai.",
      "rating" : "4.5",
      "price" : "$4.90"
    },
    {
      "imgLink" : "https://cdn.pixabay.com/photo/2017/09/14/11/47/japan-2748735_1280.jpg",
      "title" : "Shoe",
      "description" : "This is a very elgent and stupid design ever build for a shoe which no one wants to wear. Bhagwan aapki aatma ko shanti de kyunki jeete jee to apko shanti nahi milne wali kyunki shanti rajesh se pyaar karti hai.",
      "rating" : "4.5",
      "price" : "$4.90"
    },
    {
      "imgLink" : "https://cdn.pixabay.com/photo/2017/09/14/11/47/japan-2748735_1280.jpg",
      "title" : "Shoe",
      "description" : "This is a very elgent and stupid design ever build for a shoe which no one wants to wear. Bhagwan aapki aatma ko shanti de kyunki jeete jee to apko shanti nahi milne wali kyunki shanti rajesh se pyaar karti hai.",
      "rating" : "4.5",
      "price" : "$4.90"
    },
    {
      "imgLink" : "https://cdn.pixabay.com/photo/2017/09/14/11/47/japan-2748735_1280.jpg",
      "title" : "Shoe",
      "description" : "This is a very elgent and stupid design ever build for a shoe which no one wants to wear. Bhagwan aapki aatma ko shanti de kyunki jeete jee to apko shanti nahi milne wali kyunki shanti rajesh se pyaar karti hai.",
      "rating" : "4.5",
      "price" : "$4.90"
    }
  ];
  return (
    <div className="App min-h-screen max-h-fit w-full bg-sky-200 dark:bg-gray-900 py-4">
      <SearchBar />
      <div className='item-container'>
        {Items.map((item) => {
          return <ItemCard item={item} />
        })}
      </div>
    </div>
  );
}

export default App;
