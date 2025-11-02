export default function Percobaan() {

  return (
    <>
    <div className="flex items-center justify-center fixed left-0 w-full top-0 h-full">
      <form action="" className="grid grid-cols-1 gap-4 p-4 w-full md:w-1/2 rounded-md shadow-md">
        <h2 className="my-4 text-2xl font-semibold text-center">Create Account</h2>
        <div className="grid grid-cols-1">
          <label htmlFor="name" className="text-sm font-semibold">Username*</label>
          <input type="text" name="" id="" className="w-full p-2 rounded-md border-1 border-gray-500" />
        </div>
        <div className="grid grid-cols-1">
          <label htmlFor="name" className="text-sm font-semibold">Email</label>
          <input type="text" name="" id="" className="w-full p-2 rounded-md border-1 border-gray-500" />
        </div>
        <div className="grid grid-cols-1">
          <label htmlFor="name" className="text-sm font-semibold">Description</label>
          <textarea name="" id="" className="w-full h-20 p-2 rounded-md border-1 border-gray-500"></textarea>
        </div>
        <div className="flex justify-end gap-3">
          <button type="button" className="p-2 px-5 rounded-md border-1 border-gray-400">cancel</button>
          <button type="submit" className="p-2 px-5 rounded-md bg-orange-500 text-white">submit</button>
        </div>
      </form>
    </div>
    </>
  );
}