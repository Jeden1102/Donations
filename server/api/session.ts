import Stripe from 'stripe';
export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const query = getQuery(event)
  if (!query.id) {
    return false;
  }
  const stripe = new Stripe(runtimeConfig.public.NUXT_STRIPE_SK);

  const sessionId = query.id as string;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if(!session){
      return false;
    }
    return session;
  } catch (error) {
    console.log(error)
    return false;
  }
});
