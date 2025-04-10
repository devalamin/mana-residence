import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <Link to='/' className="text-2xl">Mana <span className='font-bold text-primary'>Residence</span></Link>
                    <p className="text-sm">
                        Helping you find the perfect home with ease and confidence. Your dream property is just a click away.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/listings" className="hover:text-white">Listings</Link></li>
                        <li><Link to="/agents" className="hover:text-white">Agents</Link></li>
                        <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
                    <p className="text-sm">123 Westwood Blvd<br />Los Angeles, CA 90024</p>
                    <p className="text-sm mt-2">Email: contact@estatewise.com</p>
                    <p className="text-sm">Phone: (123) 456-7890</p>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="hover:text-white text-xl" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-white text-xl" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-white text-xl" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-white text-xl" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
                © {new Date().getFullYear()} EstateWise. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
