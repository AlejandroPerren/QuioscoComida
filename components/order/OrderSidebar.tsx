import { prisma } from "../../lib/prisma";

async function getCategories() {
  return await prisma.category.findMany();
}

const OrderSidebar = async () => {
  const categories = await getCategories()

  return 
  <aside className="md:w-72 md:h-screen bg-white">
    
  </aside>;
};

export default OrderSidebar;
