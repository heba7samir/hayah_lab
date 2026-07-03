import React from 'react'

export const Return = () => {
    return (
        <section className="max-w-4xl mx-auto px-6 py-24">
            <div className="mb-16 ">
                <h1 className="text-4xl  font-semibold">
                    Return & Exchange Policy
                </h1>

             
            </div>

            <div className="space-y-12 text-gray-800 leading-8">

                {/* General Policy */}
                <div>
                    <h2 className="text-2xl font-medium mb-4">
                        Return & Exchange Policy
                    </h2>

                    <p>
                        We always strive to provide you with the best shopping
                        experience. If for any reason you are not fully
                        satisfied with your purchase, you may return or exchange
                        it under the following conditions:
                    </p>

                    <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>
                            Returns and exchanges are available within 14 days
                            from the date of purchase.
                        </li>

                        <li>
                            Products must be in their original condition,
                            unused, and sealed in the original packaging.
                        </li>

                        <li>
                            A full refund of the product value will be issued,
                            while the customer is responsible for the shipping
                            fees.
                        </li>
                    </ul>

                    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                        <p>
                            <strong>Important Notice:</strong> Roll-on
                            deodorants are classified as personal care products
                            that come into direct contact with the body. For
                            health and safety reasons, they cannot be returned
                            or exchanged, except in the case of a manufacturing
                            defect reported within 24 hours of receiving the
                            product.
                        </p>
                    </div>
                </div>

                {/* Promotional Periods */}
                <div>
                    <h2 className="text-2xl font-medium mb-4">
                        Return & Exchange Policy During Promotional Periods
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            Returns and exchanges are available within 14 days
                            of the purchase date.
                        </li>

                        <li>
                            The entire promotional bundle must be returned or
                            exchanged as received.
                        </li>

                        <li>
                            Individual items from a promotion cannot be
                            returned or exchanged separately.
                        </li>

                        <li>
                            A full refund of the bundle value will be issued,
                            with the customer responsible for the shipping fees.
                        </li>
                    </ul>
                </div>

                {/* Damaged Products */}
                <div>
                    <h2 className="text-2xl font-medium mb-4">
                        Return & Exchange Policy for Damaged or Missing Products
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            Compensation will be provided only if the issue is
                            reported within 24 hours of receiving the shipment.
                        </li>

                        <li>
                            Claims reported after this period cannot be
                            processed.
                        </li>
                    </ul>
                </div>

                {/* Complaints */}
                <div>
                    <h2 className="text-2xl font-medium mb-4">
                        How to Submit a Complaint, Return, or Exchange
                    </h2>

                    <p>
                        To ensure smooth processing, please contact us via
                        WhatsApp with the following details:
                    </p>

                    <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>Order number</li>
                        <li>Full name</li>
                        <li>Phone number</li>
                        <li>Issue details</li>
                        <li>
                            A clear photo of the invoice and received products
                        </li>
                    </ul>

                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p>
                            WhatsApp: <strong>01066643377</strong>
                        </p>
                    </div>

                    <p className="mt-4">
                        All returns are processed within 10 business days from
                        the date we receive the returned items.
                    </p>
                </div>

                {/* Refund Note */}
                <div className="p-5 bg-amber-50 border border-amber-200 rounded-lg">
                    <h2 className="text-xl font-medium mb-3">
                        Important Refund Notice
                    </h2>

                    <p>
                        If you return an item from an order that included a
                        promotional offer, discount, or free shipping, only the
                        amount paid for the returned item will be refunded,
                        excluding shipping costs.
                    </p>
                </div>

                {/* Shipping Policy */}
                <div>
                    <h2 className="text-2xl font-medium mb-4">
                        Shipping & Delivery Policy
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            Orders are shipped within 3 to 5 business days.
                        </li>

                        <li>
                            Business days are from Sunday to Thursday only.
                        </li>

                        <li>
                            Fridays, Saturdays, and official public holidays
                            are not counted as business days.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};
