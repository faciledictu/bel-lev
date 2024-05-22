import { defineCollection, z, type ImageFunction } from 'astro:content';

const getAssetSchema = (image: ImageFunction) =>
  z.discriminatedUnion('type', [
    z.object({
      type: z.literal('img'),
      src: image(),
      alt: z.string(),
    }),
    z.object({
      type: z.literal('video'),
      src: z.string(),
      thumbnail: image(),
    }),
  ]);

const mediafacadesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      location: z.string(),
      square: z.number(),
      keyFeature: z.string().optional(),
      assets: z.array(getAssetSchema(image)).length(4),
      trLink: z.string(),
    }),
});

export const collections = {
  mediafacades: mediafacadesCollection,
};

export type CarouselAsset = z.infer<ReturnType<typeof getAssetSchema>>;
