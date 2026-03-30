import { Component } from 'solid-js';
import styles from './footer.module.css';

const Footer: Component = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer class="bg-gray-800 text-white py-8">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 class="font-bold mb-4">Product</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-gray-300">Features</a></li>
                            <li><a href="#" class="hover:text-gray-300">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold mb-4">Company</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-gray-300">About</a></li>
                            <li><a href="#" class="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold mb-4">Legal</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-gray-300">Privacy</a></li>
                            <li><a href="#" class="hover:text-gray-300">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; {currentYear} DestiCam. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;