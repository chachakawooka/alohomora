// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = ConveyancingCalculatorSlice | DrinkDrivingCalculatorSlice | TestimonialsSlice | TextBlockSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Service documents */
interface ServiceDocumentData {
    /**
     * Title field in *Service*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: service.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Description field in *Service*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: service.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *Service*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: service.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * hero_image field in *Service*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: service.hero_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    hero_image: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *Service*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: service.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ServiceDocumentDataSlicesSlice>;
}
/**
 * Slice for *Service → Slice Zone*
 *
 */
type ServiceDocumentDataSlicesSlice = TextBlockSlice | DrinkDrivingCalculatorSlice | ConveyancingCalculatorSlice | TestimonialsSlice;
/**
 * Service document from Prismic
 *
 * - **API ID**: `service`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ServiceDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ServiceDocumentData>, "service", Lang>;
export type AllDocumentTypes = PageDocument | ServiceDocument;
/**
 * Default variation for ConveyancingCalculator Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ConveyancingCalculator`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ConveyancingCalculatorSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, never>;
/**
 * Slice variation for *ConveyancingCalculator*
 *
 */
type ConveyancingCalculatorSliceVariation = ConveyancingCalculatorSliceDefault;
/**
 * ConveyancingCalculator Shared Slice
 *
 * - **API ID**: `conveyancing_calculator`
 * - **Description**: `ConveyancingCalculator`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ConveyancingCalculatorSlice = prismicT.SharedSlice<"conveyancing_calculator", ConveyancingCalculatorSliceVariation>;
/**
 * Default variation for DrinkDrivingCalculator Slice
 *
 * - **API ID**: `default`
 * - **Description**: `DrinkDrivingCalculator`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DrinkDrivingCalculatorSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, never>;
/**
 * Slice variation for *DrinkDrivingCalculator*
 *
 */
type DrinkDrivingCalculatorSliceVariation = DrinkDrivingCalculatorSliceDefault;
/**
 * DrinkDrivingCalculator Shared Slice
 *
 * - **API ID**: `drink_driving_calculator`
 * - **Description**: `DrinkDrivingCalculator`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DrinkDrivingCalculatorSlice = prismicT.SharedSlice<"drink_driving_calculator", DrinkDrivingCalculatorSliceVariation>;
/**
 * Primary content in Testimonials → Primary
 *
 */
interface TestimonialsSliceDefaultPrimary {
    /**
     * Title field in *Testimonials → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: testimonials.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
}
/**
 * Item in Testimonials → Items
 *
 */
export interface TestimonialsSliceDefaultItem {
    /**
     * quote field in *Testimonials → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonials.items[].quote
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    quote: prismicT.RichTextField;
    /**
     * name field in *Testimonials → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonials.items[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * position field in *Testimonials → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonials.items[].position
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    position: prismicT.KeyTextField;
    /**
     * rating field in *Testimonials → Items*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonials.items[].rating
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    rating: prismicT.NumberField;
}
/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Testimonials`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestimonialsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TestimonialsSliceDefaultPrimary>, Simplify<TestimonialsSliceDefaultItem>>;
/**
 * Slice variation for *Testimonials*
 *
 */
type TestimonialsSliceVariation = TestimonialsSliceDefault;
/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: `Testimonials`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestimonialsSlice = prismicT.SharedSlice<"testimonials", TestimonialsSliceVariation>;
/**
 * Primary content in TextBlock → Primary
 *
 */
interface TextBlockSliceDefaultPrimary {
    /**
     * content field in *TextBlock → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_block.primary.content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextBlockSliceDefaultPrimary>, never>;
/**
 * Slice variation for *TextBlock*
 *
 */
type TextBlockSliceVariation = TextBlockSliceDefault;
/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: `TextBlock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextBlockSlice = prismicT.SharedSlice<"text_block", TextBlockSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, ServiceDocumentData, ServiceDocumentDataSlicesSlice, ServiceDocument, AllDocumentTypes, ConveyancingCalculatorSliceDefault, ConveyancingCalculatorSliceVariation, ConveyancingCalculatorSlice, DrinkDrivingCalculatorSliceDefault, DrinkDrivingCalculatorSliceVariation, DrinkDrivingCalculatorSlice, TestimonialsSliceDefaultPrimary, TestimonialsSliceDefaultItem, TestimonialsSliceDefault, TestimonialsSliceVariation, TestimonialsSlice, TextBlockSliceDefaultPrimary, TextBlockSliceDefault, TextBlockSliceVariation, TextBlockSlice };
    }
}
