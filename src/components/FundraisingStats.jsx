const FundraisingStats = () => {
  return (
    <section className="text-center p-10 bg-lime-400 rounded shadow-md h-50 mx-10">
      <h2 className="text-sm lg:text-6xl justify-center text-center font-bold lg:mx-40">
        Fundraising on Gocingo takes just a few minutes
      </h2>
      <div className="mt-8 flex justify-around text-sm lg:text-lg grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
        <div className="text-center">
          <img
            src="/team-member-1.jpg"
            alt=""
            className="rounded-full w-32 h-32 mx-auto"
          />
          <h2>Give Happiness</h2>
          <p className="text-center mx-6 hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            sunt exercitationem laborum,
          </p>
        </div>
        <div className="text-center">
          <img
            src="/team-member-3.jpg"
            alt=""
            className="rounded-full w-32 h-32 mx-auto"
          />
          <h2>Share Love</h2>
          <p className="text-center mx-6 hidden">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            est quam ipsam iure, nam!
          </p>
        </div>
        <div className="text-center">
          <img
            src="/team-member-1.jpg"
            alt=""
            className="rounded-full w-32 h-32 mx-auto"
          />
          <h2>Build Socially</h2>
          <p className="text-center mx-6 hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptates iusto voluptas
          </p>
        </div>
      </div>
    </section>
  );
};
export default FundraisingStats;
