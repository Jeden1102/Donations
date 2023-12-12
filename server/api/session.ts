import Stripe from 'stripe';
export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
  const stripe = new Stripe(runtimeConfig.public.NUXT_STRIPE_SK);

  const sessionId = 'cs_test_a1OSrVcUhfyDtZv950Fdrl7zVasMKbvUm0deQSzbVgzYwis0gNpEiAYqVT';

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return session;
  } catch (error) {
    console.error('Błąd podczas pobierania informacji o sesji:', error);
  }
});
