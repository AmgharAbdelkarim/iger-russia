import Image from 'next/image';
import listUniversities from '../../assets/data/listUniversities.json';
const UniversitiesList = () => {
 const cssLayout =
  'flex flex-col md:grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center';

 const { data } = listUniversities;

 return (
  <div className="max-w-screen-lg p-5 lg:p-0 lg:max-w-screen-lg md:max-w-screen-md mx-auto">
   <div className={`${cssLayout} md:gap-7`}>
    {data.map(({ name, logo }) => (
     <a
      key={name}
      href={'/universitiesinrussia/' + logo}
      className="cursor-pointer w-full mb-6 md:mb-0"
     >
      <div className="rounded shadow h-full hover:shadow-xl">
       <div className="p-2 flex justify-center relative">
        <Image
         src={'/images/' + logo + '.jpeg'}
         width="100"
         height="100"
         alt={logo}
        />
       </div>
       <p className="text-secondary text-lg font-semibold my-3 text-center py-5">
        {name}
       </p>
      </div>
     </a>
    ))}
   </div>
  </div>
 );
};

export default UniversitiesList;
