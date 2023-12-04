import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './component/navbar/page.jsx'
import Footer from './component/footer/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Certified MERN Stack Developer | React.js | Next.js | Tailwind CSS | Bootstrap | Firebase',
  description: `Hello! 👋 I'm a certified MERN stack developer with a passion for creating exceptional web applications. Specializing in React.js and Next.js, I bring a comprehensive skill set to the table, including expertise in Tailwind CSS and Bootstrap for meticulous UI/UX design. My proficiency extends to Firebase, ensuring seamless backend integration for robust solutions.

What Sets Me Apart:
- MERN Stack Proficiency: Certified in MongoDB, Express.js, React, and Node.js, providing a solid foundation in full-stack development.
- React.js and Next.js Expertise: Excels in building dynamic and efficient front-end applications using the latest features.
- UI/UX Mastery: Combines creativity with functionality, delivering visually appealing and user-friendly interfaces with Tailwind CSS and Bootstrap.
- Firebase Integration: Proven track record of seamlessly integrating Firebase for robust backend solutions, real-time databases, and authentication services.

Why Choose Me:
- Certified Skills: Committed to staying current with industry best practices and standards.
- Collaborative Approach: Thrives in collaborative environments, valuing open communication and teamwork for project success.
- Problem Solver: Enjoys tackling challenges and finding innovative solutions.

Let's Collaborate:
Seeking a dedicated and skilled MERN stack developer for your project? Let's discuss your goals and how my expertise can contribute to the success of your web development endeavors.

Looking forward to the opportunity!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='lg:w-[80%] lg:mx-auto bg-white'>
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
