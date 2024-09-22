import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center gap-10 p-6">
      
      {/* Main Content */}
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        
        {/* Left Side - Info */}
        <div className="md:flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Hi there, I&apos;m Aadarsha Poudel
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            I am from Kathmandu, Nepal. I&apos;m CEO of <a target="_blank" href= "https://www.instagram.com/shikharoutdoor" className="text-blue-500">Shikhar Outdoors</a> and a passionate IT student.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 text-blue-500">
            <a target="_blank" href="https://www.facebook.com/people/Aadarsha-Poudel/pfbid02vV76Gj4SFP4gg2sRDNdm8823VdS2Rura1QSs91Zg3evWXfGoVhnB2h1Z5kqx3jpbl/?mibextid=LQQJ4d" className="hover:text-blue-700">
              <FaFacebook size={24} />
            </a>
            <a target="_blank" href="https://www.instagram.com/pp_oudel" className="hover:text-pink-600">
              <FaInstagram size={24} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/aadarsha-poudel-7b00ab27a/" className="hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:flex-1 flex justify-center md:justify-end">
          <div className="rounded-full overflow-hidden border-4 border-white shadow-lg w-48 h-48">
            <Image
              src="/pp.jpeg" // Replace with your image path
              alt="Aadarsha Poudel"
              layout="responsive"
              width={150}
              height={150}
            />
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="w-full max-w-4xl mt-6 text-white">
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left space-y-4 md:space-y-0">
          
          {/* Phone Section */}
          <div className="flex-1 flex items-center justify-center md:justify-start space-x-2">
            <FaPhoneAlt size={20} />
            <div>
              <p className="font-bold">Phone</p>
              <p><a href="tel:+977-9765221333">+977-9765221333</a></p>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex-1 flex items-center justify-center md:justify-start space-x-2">
            <FaEnvelope size={20} />
            <div>
              <p className="font-bold">Email</p>
              <p><a href="mailto:aadarshap438@gmail.com">aadarshap438@gmail.com</a></p>
            </div>
          </div>

          {/* Location Section */}
          <div className="flex-1 flex items-center justify-center md:justify-start space-x-2">
            <FaMapMarkerAlt size={20} />
            <div>
              <p className="font-bold">Location</p>
              <p><a href="https://maps.app.goo.gl/mqj8v6Vkc2emucYW6" target="_blank">Kathmandu, Nepal</a></p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
