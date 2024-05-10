
import React, { useState } from 'react';
import blogheader from '../../assets/homeimage.jpg';
import ReactPaginate from 'react-paginate';

const Blog = () => {
  const [activePage, setActivePage] = useState(0); 
  const [sortingOption, setSortingOption] = useState('');
  const itemsPerPage = 8;

  const bloggers = [
    { title: 'Exploring the Wild Outdoors', description: 'Embark on a journey through untouched landscapes and discover the beauty of nature.', blogimage: 'https://www.gstatic.com/webp/gallery/1.jpg' },
    { title: 'A Culinary Adventure', description: 'Indulge your senses with tantalizing flavors and exotic dishes from around the world.', blogimage: 'https://www.gstatic.com/webp/gallery/2.jpg' },
    { title: 'Urban Exploration Chronicles', description: 'Navigate bustling city streets and uncover hidden gems in the heart of metropolises.', blogimage: 'https://www.gstatic.com/webp/gallery/3.jpg' },
    { title: 'The Art of Photography', description: 'Capture fleeting moments and immortalize them through the lens of a camera.', blogimage: 'https://www.gstatic.com/webp/gallery/4.jpg' },
    { title: 'Historical Wonders Revealed', description: 'Travel back in time and witness the marvels of ancient civilizations.', blogimage: 'https://www.gstatic.com/webp/gallery/5.jpg' },
    { title: 'Adventures in Literature', description: 'Immerse yourself in the pages of classic novels and modern masterpieces.', blogimage: 'https://www.gstatic.com/webp/gallery/2.jpg' },
    { title: 'Exploring the Depths of the Ocean', description: 'Dive into the mysterious world beneath the waves and encounter marine life.', blogimage: 'https://www.gstatic.com/webp/gallery/3.jpg' },
    { title: 'The Thrill of Extreme Sports', description: 'Feel the adrenaline rush as you conquer daring feats and extreme challenges.', blogimage: 'https://www.gstatic.com/webp/gallery/5.jpg' },
    { title: 'Journey Through Time and Space', description: 'Embark on an epic adventure across galaxies and dimensions beyond imagination.', blogimage: 'https://www.gstatic.com/webp/gallery/4.jpg' },
    { title: 'Discovering Cultural Treasures', description: 'Immerse yourself in diverse cultures and traditions from every corner of the globe.', blogimage: 'https://www.gstatic.com/webp/gallery/1.jpg' },
    { title: 'Tales of Survival and Resilience', description: 'Experience firsthand accounts of triumph over adversity in the face of danger.', blogimage: 'https://www.gstatic.com/webp/gallery/5.jpg' },
    { title: 'The Magic of Festivals and Celebrations', description: 'Celebrate joyous occasions and cultural festivities from around the world.', blogimage: 'https://www.gstatic.com/webp/gallery/4.jpg' },
    { title: 'Sustainable Living and Eco-Friendly Practices', description: 'Learn about eco-conscious lifestyles and initiatives to protect our planet.', blogimage: 'https://www.gstatic.com/webp/gallery/3.jpg' },
    { title: 'Navigating the Great Outdoors', description: 'Embark on thrilling adventures through forests, mountains, and deserts.', blogimage: 'https://www.gstatic.com/webp/gallery/2.jpg' },
    { title: 'Culinary Delights from Around the World', description: 'Savor mouthwatering dishes and culinary creations from diverse cuisines.', blogimage: 'https://www.gstatic.com/webp/gallery/1.jpg' },
    { title: 'Exploring Untouched Wilderness', description: 'Venture into remote landscapes untouched by civilization and connect with nature.', blogimage: 'https://www.gstatic.com/webp/gallery/2.jpg' },
    { title: 'The Art of Travel Photography', description: 'Capture breathtaking moments and scenic landscapes from your travels.', blogimage: 'https://www.gstatic.com/webp/gallery/5.jpg' },
    { title: 'Historical Sites and Architectural Marvels', description: 'Discover the rich history and cultural heritage preserved in ancient monuments.', blogimage: 'https://www.gstatic.com/webp/gallery/4.jpg' },
    { title: 'Literary Adventures and Book Reviews', description: 'Explore the world of literature through insightful reviews and recommendations.', blogimage: 'https://www.gstatic.com/webp/gallery/2.jpg' },
    { title: 'Underwater Expeditions and Marine Exploration', description: 'Dive into the depths of the ocean and witness the wonders of marine life.', blogimage: 'https://www.gstatic.com/webp/gallery/1.jpg' },
];




  const handlePageChange = (selectedPage) => {
    setActivePage(selectedPage.selected);
  };

  const handleSortingChange = (option) => {
    setSortingOption(option);

  };

  const startIndex = activePage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBloggers = bloggers.slice(startIndex, endIndex);

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header */}
      <div
        className='h-96 bg-cover bg-center flex items-center justify-center text-white relative'
        style={{ backgroundImage: `url(${blogheader})` }}
      >
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>THE BLOGGERS</h1>
          <p className='text-lg mb-4'>Discover amazing bloggers and their stories.</p>
          <div className='flex items-center justify-center'>
            <input
              type='text'
              placeholder='Search'
              className='px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 text-black'
            />
            <button className='bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300'>Search</button>
          </div>
        </div>
      </div>

      {/* Sorting */}
      <div className='flex justify-center mt-4 space-x-4'>
        <button className={`px-4 py-2 rounded-md border border-gray-300 ${sortingOption === 'random' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} hover:bg-blue-500 hover:text-white transition duration-300`} onClick={() => handleSortingChange('random')}>Random</button>
        <button className={`px-4 py-2 rounded-md border border-gray-300 ${sortingOption === 'popularity' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} hover:bg-blue-500 hover:text-white transition duration-300`} onClick={() => handleSortingChange('popularity')}>Popularity</button>
        <button className={`px-4 py-2 rounded-md border border-gray-300 ${sortingOption === 'recency' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} hover:bg-blue-500 hover:text-white transition duration-300`} onClick={() => handleSortingChange('recency')}>Recency</button>
      </div>

      {/* Blogger Cards */}
      <div className='flex flex-wrap justify-center mt-8 gap-8 px-4'>
        {/* Map through current bloggers data and generate cards */}
        {currentBloggers.map((blogger, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md p-6 w-full md:w-80 hover:bg-gray-100 transition duration-300'>
            <img src= {blogger.blogimage} alt='' />
            <h2 className='text-xl font-bold mb-2'>{blogger.title}</h2>
            <p className='text-gray-600'>{blogger.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex justify-center mt-8'>
        <ReactPaginate
          pageCount={Math.ceil(bloggers.length / itemsPerPage)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={0}
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          breakClassName="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-md"
          previousClassName={`relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-md mr-2 ${activePage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500 hover:text-white transition duration-300'}`}
          nextClassName={`relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-md ml-2 ${activePage === Math.ceil(bloggers.length / itemsPerPage) - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500 hover:text-white hover:bg-[#3b82f6] transition duration-300'}`}
          pageClassName="relative inline-flex items-center  border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          activeLinkClassName="bg-blue-500 text-white px-4 py-2 mx-1 rounded-md hover:bg-blue-600 transition duration-300"
          pageLinkClassName='px-3 py-2'
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Blog;
