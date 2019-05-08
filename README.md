# ![LOGO](logo.png) Zalando Shop **flow**ground Connector

## Description

A generated **flow**ground connector for the Zalando Shop API (version v1.0).

Generated from: https://api.apis.guru/v2/specs/zalando.com/v1.0/swagger.json<br/>
Generated at: 2019-05-07T17:45:05+03:00

## API Description

The shop API empowers developers to build amazing new apps or websites using Zalando shop data and services.

## Authorization

This API does not require authorization.

## Actions

### Get Article Reviews

> Zalando API Article Reviews Schema

*Tags:* `articles`

#### Input Parameters
* `articleId` - _optional_ - Article IDs. A list of config SKUs for which the article reviews will be returned.
Required if articleModelId is empty.

* `articleModelId` - _optional_ - Article model IDs. A list of model SKUs for which the article reviews will be returned.
Required if articleId is empty.

* `minStarRating` - _optional_ - To get reviews with minimum star rating.
* `maxStarRating` - _optional_ - To get reviews with maximum star rating.
* `sort` - _optional_ - articles are sorted on reviews provided by customers (eg: best)
    Possible values: newest, best, worst, most_helpful.
* `page` - _optional_ - to request with required page number or pagination
* `pageSize` - _optional_ - to request with required page size in a page
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Get Article Reviews Summaries

> Zalando API Article Reviews Summaries Schema

*Tags:* `articles`

#### Input Parameters
* `articleModelId` - _required_ - Article model IDs. A list of model SKUs for which the article review summaries will be returned.
* `page` - _optional_ - to request with required page number or pagination
* `pageSize` - _optional_ - to request with required page size in a page
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Get Article Reviews Summaries by articleModelId

> Zalando API ArticleReviewsSummaries Schema

*Tags:* `articles`

#### Input Parameters
* `articleModelId` - _required_ - To get unique reviews summary from article model Id.
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Get Article Reviews by reviewId

> Zalando API ArticleReviews Schema

*Tags:* `articles`

#### Input Parameters
* `reviewId` - _required_ - To get unique review by review Id.
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Search for Articles

> Search for articles based on various different possible filter like e.g. the `brandFamily`, the `catagory` or a<br/>
> specific `color`. See [Filters](https://todo) for a list of all available filter options.<br/>
> <br/>
> The default `pageSize` for responses is set to `20`. You can add a `pageSize` request parameter to adjust that.<br/>
> Please keep in mind that the maximum `pageSize` for this resource is `200`.<br/>
> <br/>
> The endpoint also supports reducing the fields returned for each article via the `fields` parameter. Please<br/>
> refer to [fields parameter](https://todo) for more details.

*Tags:* `articles`

#### Input Parameters
* `articleId` - _optional_ - The `articleIds` to use use for filtering.

One or more `articleIds` might be used as a filter criteria. Submit multiple `articleId` request parameters for
more than one to be used. They will be treated as `OR` criteria.
* `articleModelId` - _optional_ - filters by article ModelId
* `articleUnitId` - _optional_ - filters by article's unit id
* `activationDate` - _optional_ - period or time the articles are activated for selling in the shop
* `ageGroup` - _optional_ - filters by age group (eg: kids)
* `assortmentArea` - _optional_ - filters by classification of articles (eg: maternity) 
* `brand` - _optional_ - filters by brand key given by user (eg: SA5)
* `brandfamily` - _optional_ - filters by brand family key (eg: nike) 
* `category` - _optional_ - filters by category (eg: Socks, Rain Coats)
* `color` - _optional_ - filters by color (eg: red, blue)
* `den` - _optional_ - filters by den 
* `filling` - _optional_ - filters by different kinds of garment filling materials (eg: satin, wolle)
* `fullText` - _optional_ - filters by text (eg: search by 'as' gives result with articles of brand Sass)
* `gender` - _optional_ - filters by gender
* `heelForm` - _optional_ - filters by heel form (eg: flat)
* `heelHeight` - _optional_ - filters by height of the heel size or length (eg: xs)
* `length` - _optional_ - filters by garments length (eg: 3/4 length, knee-length)
* `occasion` - _optional_ - filters by type of occasion (eg: party, business)
* `pattern` - _optional_ - filters by pattern on the garments (eg: animal print, plain)
* `price` - _optional_ - filters all articles in price range (eg: 9-90)
* `sale` - _optional_ - filters discounted articles marked as sale
* `season` - _optional_ - filters by season (Autumn/Winter or Spring/Summer)
* `shaftHeight` - _optional_ - filters by shaft height (eg: s, xs)
* `shaftWidth` - _optional_ - filters by shaft width (eg: s, l)
* `shirtCollar` - _optional_ - filters by shirt collar styles (eg: low V neck, lined collar)
* `shoeFastener` - _optional_ - filters by shoe fastener types (eg: buckle, lacing)
* `shoeToecap` - _optional_ - filters by shoe toe cap variants (eg: pointed, square)
* `shopArea` - _optional_ - filters by classification of articles
* `size` - _optional_ - filters by size
* `sports` - _optional_ - filters by different sport activities (eg: football)
* `technology` - _optional_ - filters by technology used to produce the articles
* `trouserRise` - _optional_ - filters by trouser rise
* `upperMaterial` - _optional_ - filters by different type of upper material used on garments (eg: lace)
* `volume` - _optional_ - filters by volume
* `page` - _optional_ - to request with required page number or pagination
* `pageSize` - _optional_ - to request with required page size in a page
* `sort` - _optional_ - sorting order (eg: popularity)
    Possible values: popularity, activationdate, pricedesc, priceasc, sale.
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Get Article by articleId

> Zalando API Article Schema

*Tags:* `articles`

#### Input Parameters
* `articleId` - _required_ - To get unique article for article Id.
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Get Article media by articleId

> Zalando API Article Schema

*Tags:* `articles`

#### Input Parameters
* `articleId` - _required_ - To get unique article for article Id media.
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Get Article reviews by articleId

> Zalando API Article Schema

*Tags:* `articles`

#### Input Parameters
* `articleId` - _required_ - To get unique article for article Id reviews.
* `minStarRating` - _optional_ - To get reviews with minimum star rating.
* `maxStarRating` - _optional_ - To get reviews with maximum star rating.
* `sort` - _optional_ - articles are sorted on reviews provided by customers (eg: best)
    Possible values: newest, best, worst, most_helpful.
* `page` - _optional_ - to request with required page number or pagination
* `pageSize` - _optional_ - to request with required page size in a page
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Get Article reviews summary by articleId

> Zalando API Article Schema

*Tags:* `articles`

#### Input Parameters
* `articleId` - _required_ - To get unique article for article Id reviews summary.
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Get Article units by articleId

> Zalando API Article Schema

*Tags:* `articles`

#### Input Parameters
* `articleId` - _required_ - To get unique article for article Id units.
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Get Article units by articleId snd unitId

> Zalando API Article Schema

*Tags:* `articles`

#### Input Parameters
* `articleId` - _required_ - To get unique article for article Id.
* `unitId` - _required_ - To get unique article for article Id unit.
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Shop Brands

> Zalando API Brands Schema

*Tags:* `brands`

#### Input Parameters
* `key` - _optional_ - Request Brand by key
* `name` - _optional_ - Request Brand by name
* `brandFamilyName` - _optional_ - Request Brand by brandFamilyName
* `brandFamilyKey` - _optional_ - Request Brand by brandFamilyKey
* `page` - _optional_ - to request with required page number or pagination
* `pageSize` - _optional_ - to request with required page size in a page
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Get Single Brand by Key

> Zalando API Brand Schema

*Tags:* `brands`

#### Input Parameters
* `key` - _required_ - To get unique Brand by key.
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Shop Categories

> Zalando API Categories Schema

*Tags:* `categories`

#### Input Parameters
* `name` - _optional_ - Request Categories by names
* `type` - _optional_ - Request Categories by type
* `outlet` - _optional_ - Request Categories by outlet
* `hidden` - _optional_ - Request Categories by hidden
* `targetGroup` - _optional_ - Request Categories by target group
* `key` - _optional_ - Request Categories by keys
* `parentKey` - _optional_ - Request Categories by parent keys
* `childKey` - _optional_ - Request Categories by child keys
* `suggestedFilter` - _optional_ - Request Categories by suggested filters
* `page` - _optional_ - to request with required page number or pagination
* `pageSize` - _optional_ - to request with required page size in a page
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Get Single Category by Key

> Zalando API Category Schema

*Tags:* `categories`

#### Input Parameters
* `key` - _required_ - To get unique Category by key.
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Shop Domains

> Zalando API Domains Schema

*Tags:* `domains`

### Shop Facets

> Zalando API Facets Schema

*Tags:* `facets`

#### Input Parameters
* `ageGroup` - _optional_ - filters by age group (eg: kids)
* `articleId` - _optional_ - The `articleIds` to use use for filtering.

One or more `articleIds` might be used as a filter criteria. Submit multiple `articleId` request parameters for
more than one to be used. They will be treated as `OR` criteria.
* `activationDate` - _optional_ - period or time the articles are activated for selling in the shop
* `articleModelId` - _optional_ - filters by article ModelId
* `assortmentArea` - _optional_ - filters by classification of articles (eg: maternity) 
* `brand` - _optional_ - filters by brand key given by user (eg: SA5)
* `brandfamily` - _optional_ - filters by brand family key (eg: nike) 
* `category` - _optional_ - filters by category (eg: Socks, Rain Coats)
* `color` - _optional_ - filters by color (eg: red, blue)
* `den` - _optional_ - filters by den 
* `filling` - _optional_ - filters by different kinds of garment filling materials (eg: satin, wolle)
* `gender` - _optional_ - filters by gender
* `heelForm` - _optional_ - filters by heel form (eg: flat)
* `heelHeight` - _optional_ - filters by height of the heel size or length (eg: xs)
* `length` - _optional_ - filters by garments length (eg: 3/4 length, knee-length)
* `occasion` - _optional_ - filters by type of occasion (eg: party, business)
* `pattern` - _optional_ - filters by pattern on the garments (eg: animal print, plain)
* `price` - _optional_ - filters all articles in price range (eg: 9-90)
* `sale` - _optional_ - filters discounted articles marked as sale
* `season` - _optional_ - filters by season (Autumn/Winter or Spring/Summer)
* `shaftHeight` - _optional_ - filters by shaft height (eg: s, xs)
* `shaftWidth` - _optional_ - filters by shaft width (eg: s, l)
* `shirtCollar` - _optional_ - filters by shirt collar styles (eg: low V neck, lined collar)
* `shoeFastener` - _optional_ - filters by shoe fastener types (eg: buckle, lacing)
* `shoeToecap` - _optional_ - filters by shoe toe cap variants (eg: pointed, square)
* `shopArea` - _optional_ - filters by classification of articles
* `size` - _optional_ - filters by size
* `sports` - _optional_ - filters by different sport activities (eg: football)
* `technology` - _optional_ - filters by technology used to produce the articles
* `trouserRise` - _optional_ - filters by trouser rise
* `upperMaterial` - _optional_ - filters by different type of upper material used on garments (eg: lace)
* `volume` - _optional_ - filters by volume
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Shop Filters

> Zalando API Filters Schema

*Tags:* `filters`

#### Input Parameters
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Get Single Filter by filterName

> Zalando API Filters Schema

*Tags:* `filters`

#### Input Parameters
* `filterName` - _required_ - To get Filter by filterName.
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

### Get Recommendations by articleId

> Zalando API Recommendations Schema

*Tags:* `recommendations`

#### Input Parameters
* `articleIds` - _required_ - To get Recommendations by articleIds.
* `maxResults` - _optional_ - To get maximum results of Recommendations by articleId.
* `Accept-Language` - _optional_ - Specify which Shop to use.

A standard `Accept-Language` header which specifies the shop that should be used. E.g. `de-DE` will use the German
shop (as does [https://www.zalando.de](https://www/zalando.de) and `de-AT` will use the Austrian one.

The shop choosen will e.g. define the currency used for prices as well as the language for product names and
descriptions. Furthermore it will impact which articles are available as they might differ between countries.
    Possible values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE.
* `fields` - _optional_ - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted

## License

**flow**ground :- Telekom iPaaS / zalando-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
