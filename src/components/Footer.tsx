import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* --- LEFT SECTION --- */}
        <div>
          <div className="flex items-center mb-6">
            <img src="/images/logo.png" alt="Elite Sports U Logo" className="h-10 w-auto" />
          </div>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/locations" className="hover:text-red transition">Locations</Link></li>
            <li><Link href="/accessibility" className="hover:text-red transition">Accessibility Statement</Link></li>
            <li><Link href="/download-app" className="hover:text-red transition">Download App</Link></li>
            <li><Link href="/careers" className="hover:text-red transition">Careers</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-red transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* --- CENTER SECTION --- */}
        <div>
          <ul className="space-y-3 text-gray-300">
            
          </ul>
        </div>

        {/* --- RIGHT SECTION --- */}
        <div>
          <h3 className="text-lg font-bold uppercase mb-4 tracking-wide">Stay Up to Date on All Things Elite!</h3>
          <form
  action="https://formsubmit.co/elitesportsuniversity@gmail.com"
  method="POST"
  className="flex flex-col gap-3"
>
            <input
              type="email"
              placeholder="Enter email address*"
              required
              className="p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red"
            />

{/* Hidden config fields */}
<input type="hidden" name="_next" value="https://elite-sports-u.vercel.app/thank-you" />
<input type="hidden" name="_subject" value="New Newsletter Signup - Elite Sports U" />
<input type="hidden" name="_captcha" value="false" />

            <button
              type="submit"
              className="bg-red text-white py-3 rounded-full font-bold uppercase hover:bg-white hover:text-red transition"
            >
              Join
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-4 leading-snug">
            By joining, you agree to receive updates from Elite Sports U. You can unsubscribe at any time. 
            View our <Link href="/privacy-policy" className="underline text-white hover:text-red">Privacy Policy</Link> for more information.
          </p>
        </div>
      </div>

      {/* --- SOCIALS --- */}
      <div className="max-w-7xl mx-auto mt-12 flex justify-center gap-6 text-gray-400 text-2xl">
        <Link href="#" className="hover:text-red transition"><FaFacebookF /></Link>
        <Link href="#" className="hover:text-red transition"><FaInstagram /></Link>
        <Link href="#" className="hover:text-red transition"><FaXTwitter /></Link>
        <Link href="#" className="hover:text-red transition"><FaYoutube /></Link>
        <Link href="#" className="hover:text-red transition"><FaTiktok /></Link>
        <Link href="#" className="hover:text-red transition"><FaLinkedinIn /></Link>
      </div>

      {/* --- COPYRIGHT --- */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Elite Sports U · All Rights Reserved
      </div>
    </footer>
  );
}

