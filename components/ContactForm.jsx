import React from 'react'

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-10 bg-gradient-to-tl from-[#222516] to-[#000000] rounded-3xl w-1/2 p-10 border border-[#181818] hover:border-purple-600 transition ease-in-out duration-500">
    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-400 to-white">
      Join forces with us!
    </div>
    <div className="text-sm">
      We craft beautifully simple designs and code with love. It's as
      simple as that!
    </div>
    <form className="flex flex-col gap-10">
      <div className="flex gap-5">
        <input
          className="rounded-xl py-4 bg-black border border-bg-[#272a18] hover:border-purple-600 w-full text-sm font-light px-4"
          placeholder="First Name"
          type="text"
          name="fname"
          autocomplete="off"
        />
        <input
          className="rounded-xl py-4 bg-black border border-bg-[#272a18] hover:border-purple-600 w-full text-sm font-light px-4"
          placeholder="Last Name"
          type="text"
          name="lname"
          autocomplete="off"
        />
      </div>
      <div className="flex gap-5">
        <input
          className="rounded-xl py-4 bg-black border border-bg-[#272a18] hover:border-purple-600 w-full text-sm font-light px-4"
          placeholder="Email Address"
          type="text"
          name="lname"
          autocomplete="off"
        />
        <input
          className="rounded-xl py-4 bg-black border border-bg-[#272a18] hover:border-purple-600 w-full text-sm font-light px-4"
          placeholder="Phone Number"
          type="text"
          name="lname"
          autocomplete="off"
        />
      </div>
      <textarea
        className="rounded-xl bg-black border border-bg-[#272a18] hover:border-purple-600 p-3"
        placeholder="Message"
        id="w3review"
        name="w3review"
        rows="8"
        cols="70"
      ></textarea>
      <div className="flex justify-center">
        <button
          className="bg-gradient-to-tl from-purple-600 to-black hover:from-black hover:to-black py-3 px-5 rounded-xl text-sm border-2 hover:text-purple-600 hover:border-2 border-purple-600 transition ease-in-out duration-300"
          type="submit"
        >
          Send Now
        </button>
      </div>
    </form>
  </div>
  )
}

export default ContactForm