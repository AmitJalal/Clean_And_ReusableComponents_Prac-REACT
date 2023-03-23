import { Button } from '../button/Button';

const Card = ({ products }) => {
  return (
    <section className="max-w-5xl grid gap-x-4 gap-y-2 grid-cols-2 lg:grid-cols-3">
      {products?.map((product) => {
        const { id, brand, title, category, image, price } = product;
        console.log(image);
        return (
          <article key={id} className="bg-white p-2 rounded-md shadow-lg">
            {/* Card Info */}
            <img
              src={image}
              className="w-full h-48 object-cover bg-center rounded-md"
              alt={title}
            />
            <h1 className="font-bold">{title}</h1>
            <h1>{brand}</h1>
            <h1>{category}</h1>
            <h1>
              <span className="font-bold">₹</span> {price}
            </h1>
            {/* Card Info Ends */}

            {/* Button */}
            <div className="flex items-center justify-center">
              <Button
                id={id}
                type={'button'}
                text={'Add To Cart'}
                color={'bg-gray-200'}
                margin={'my-4'}
                padding={'px-4 py-1'}
              />
            </div>
            {/* Button Ends */}
          </article>
        );
      })}
    </section>
  );
};

export default Card;
