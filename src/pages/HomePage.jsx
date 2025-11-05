import { Link } from "react-router";

import { BsArrowUpRight, BsShield, BsLightningCharge } from "react-icons/bs";
import { MdOutlineAnalytics } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import Assets from "../components/homepage/AssetsComponent";
import Box from "../components/homepage/BoxComponent";
import Review from "../components/homepage/RevieuwComponent";

const Home = () => {
  const assetData = [
    {
      id: 1,
      title: '$2.4B+',
      description: 'Assets Under Management',
    },
    {
      id: 2,
      title: '500K+',
      description: 'Active Investors',
    },
    {
      id: 3,
      title: '12.8%',
      description: 'Average Annual Return',
    },
  ]

  const boxdata = [
    {
      id: 1,
      logo: <BsArrowUpRight />,
      title: 'AI-Powered Insights',
      description: 'Get personalized investment recommendations based on advanced machine learning algorithms and market analysis.',
    },
    {
      id: 2,
      logo: <BsShield />,
      title: 'Bank-Grade Security',
      description: 'Your investments are protected with 256-bit encryption, two-factor authentication, and SIPC insurance.',
    },
    {
      id: 3,
      logo: <BsLightningCharge />,
      title: 'Instant Execution',
      description: 'Execute trades in milliseconds with our ultra-fast order processing system and real-time market data.',
    },
    {
      id: 4,
      logo: <MdOutlineAnalytics />,
      title: 'Advanced Analytics',
      description: 'Track performance, analyze trends, and optimize your portfolio with professional-grade tools and reporting.',
    },
    {
      id: 5,
      logo: <GoPeople />,
      title: 'Expert Advisory',
      description: 'Access to certified financial advisors and investment professionals for personalized guidance.',
    },
    {
      id: 6,
      logo: <AiOutlineGlobal />,
      title: 'Global Markets',
      description: 'Invest in stocks, ETFs, bonds, and cryptocurrencies across global markets with a single platform.',
    },
  ]

  const reviews = [
    {
      id: 1,
      rating: 5,
      description: `InvestPro has completely transformed my approach to investing. The AI-powered insights helped me achieve a 22% return last year.`,
      reviewer: {
        firstName: 'Sarah',
        LastName: 'Johnson',
      },
      job: 'Entrepreneur',
    },
    {
      id: 2,
      rating: 5,
      description: `The platform is incredibly intuitive and the customer support is outstanding. I've grown my portfolio by 40% in just 18 months.`,
      reviewer: {
        firstName: 'Michael',
        LastName: 'Chen',
      },
      job: 'Software Engineer',
    },
    {
      id: 3,
      rating: 5,
      description: 'As a financial advisor, I recommend InvestPro to all my clients. The analytics and reporting features are professional-grade.',
      reviewer: {
        firstName: 'Emily',
        LastName: 'Rodriguez',
      },
      job: 'Finacial Advisor',
    },
  ]
  return (
    <>
      <div className="md:pb-15 pb-10 pt-8 xl:mx-40">
        <div className="grid grid-col-1 md:grid-cols-2 justify-items-center">
          <div className="w-full max-w-150 px-2 mb-3 md:ps-10">
            <h1 className="text-4xl lg:text-6xl">Invest Smarter, Grow Faster</h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-5">
              Build your wealth with our AI-powered investment platform. Get personalized portfolio recommendations, real-time market insights, and professional-grade tools to maximize your returns.
            </p>
            <div className="mt-3">
              <Link to={"/register"}>
                <div className="py-1 text-sm px-3 rounded-md bg-zinc-800 text-white text-center text-nowrap hover:bg-zinc-700 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200 w-45">Start investing today →</div>
              </Link>
            </div>

            <div className="flex">
              {assetData.map((i) => {
                return Assets(i.id, i.title, i.description);
              })}
            </div>

          </div>

          <div className="w-full flex justify-center md:justify-start md:px-10 px-2">
            <img src="/images/stockmarket.png" className="max-h-100 rounded-3xl object-cover"></img>
          </div>
        </div>
      </div>

      <div className="bg-zinc-200 dark:bg-zinc-900 py-10 text-center xl:px-40">
        <div>
          <h1 className="text-4xl">
            Everything You Need to Invest Successfully
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-5" >
            Our comprehensive platform provides all the tools, insights, and security you need to build and manage your investment portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {boxdata.map((i) => {
            return Box(i.id, i.logo, i.title, i.description)
          })}

        </div>
      </div>

      <div className="bg-zinc-100 dark:bg-zinc-800 py-10 pb-5 text-center xl:px-40">
        <div>
          <h1 className="text-4xl">
            Trusted by Thousands of Investors
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-5" >
            See what our community of succesful investors has to day about thier experience with InvestPro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {reviews.map((i) => {
            return Review(i.id, i.rating, i.description, i.reviewer, i.job);
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 place-content-stretch md:grid-cols-2 bg-zinc-100 dark:bg-zinc-800 mx-2 xl:mx-42 pb-10 rounded-2xl">
        <div className="p-10 border border-zinc-200 dark:border-zinc-700 rounded-t-2xl rounded-none md:rounded-e-none md:rounded-s-2xl">
          <div>
            <p className="text-4xl mb-3">Join the Succes Stories</p>
            <p className="text-zinc-400 dark:text-zinc-500">
              Start your investment journey today and become part of our community of successful investors. Get access to professional-grade tools and personalized guidance
            </p>
            <div className="flex">
              {Assets(1, "4.9/5", "Average rating")}
              {Assets(2, "10,000+", "Reviews")}
            </div>
          </div>
        </div>

        <div className="md:rounded-e-2xl rounded-b-2xl md:rounded-none">
          <img className="md:rounded-e-2xl rounded-b-2xl md:rounded-none h-full object-cover" src="/images/meeting.jpeg" alt="" />
        </div>
      </div>

      <div className="bg-zinc-200 dark:bg-zinc-900 md:pb-15 pb-10 pt-8">
        <div className="xl:mx-40">

          <div className="grid grid-col-1 md:grid-cols-2 justify-items-center">
            <div className="w-full max-w-150 px-2">

              <h1 className="text-4xl lg:text-6xl">Ready to Start Building Your Wealth?</h1>

              <p className="text-zinc-500 dark:text-zinc-400 mt-5 mb-3">
                Join over 500,00 investors who trust InvetsPro to grow thier wealth. Start with as little as $1 and get acces to professional-grade investment tools.
              </p>

              <p className="flex"><span className="text-green-600 mt-1 me-2 mb-2 text-sm"><IoMdCheckmarkCircleOutline /></span>No minimum investment required</p>
              <p className="flex"><span className="text-green-600 mt-1 me-2 mb-2 text-sm"><IoMdCheckmarkCircleOutline /></span>Free portfolio analysis</p>
              <p className="flex"><span className="text-green-600 mt-1 me-2 mb-2 text-sm"><IoMdCheckmarkCircleOutline /></span>24/7 costumer support</p>
              <p className="flex"><span className="text-green-600 mt-1 me-2 mb-2 text-sm"><IoMdCheckmarkCircleOutline /></span>SIPC insured up to $500k</p>


              <div className="md:flex">

                <div class="sm:col-span-4">
                  <div class="mt-2">
                    <input id="email" type="email" name="email" placeholder="Enter your email adress..." autocomplete="email" class="block w-full sm:65 rounded-lg  px-3 p-1 text-base text-white outline-1 outline-zinc-100 dark:outline-zinc-700  focus:outline-2 focus:-outline-offset-1 focus:outline-zinc-300 dark:focus:outline-zinc-600 placeholder:text-zinc-900 dark:placeholder:text-zinc-300 sm:text-sm/6" />
                  </div>
                </div>

                <div className="mt-2">
                  <Link to={"/register"}>
                    <div className="py-1.5 md:ms-2 text-sm px-3 rounded-md bg-zinc-800 text-white text-center text-nowrap hover:bg-zinc-700 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200 w-full sm:w-45">Get Started Free →</div>
                  </Link>
                </div>
              </div>

              <p className="mt-3 mb-3 text-zinc-400 dark:text-zinc-500 text-xs">By signing up, you agree to our Terms of Service and Privacy Policy</p>
            </div>

            <div className="w-full flex justify-center md:justify-start md:px-10 px-2">
              <img src="/images/marketapp.jpeg" className="max-h-100 rounded-3xl object-cover"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home