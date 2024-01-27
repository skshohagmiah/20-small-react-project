import Image from "next/image";
import Button from "./Button";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-2 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button bg="bg-blue-300" link="imageGallery" text="Image Gallery"/>
        <Button bg="bg-gray-300" link="accordion" text="accordion"/>
        <Button bg='bg-purple-300' link="tabs" text="tabs"/>
        <Button bg="bg-green-300" link="slider" text="Image Slider"/>
        <Button bg="bg-black/20" link="expend" text="Folder Extend"/>
        <Button bg="bg-lime-300" link="explorer" text='File Explorer'/>
        <Button bg="bg-yellow-300" link="multiselect" text="Multi Select"/>
        <Button  bg="bg-orange-300" link="autosuggest" text="Auto Suggestion" />
        <Button bg='bg-violet-300' link="pagination" text="Pagination" />
        <Button bg="bg-indigo-300" link="number" text="Show Number Slowly" />
        <Button bg="bg-stone-300" link="countdown" text="Time Countdowm"/>
        <Button bg="bg-gray-300" link="loadmore" text="Load More"/>
        <Button bg="bg-red-300" link="loader" text="Loader"/>
      </div>
    </div>
  );
}
