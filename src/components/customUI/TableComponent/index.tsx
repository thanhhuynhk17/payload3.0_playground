

export async function TableComponent({ className }: { className?: string }) {
    return (
        <div className="relative overflow-x-auto sm:rounded-lg mt-4">
            <div className="flex items-center justify-between py-2">
                <h3 className="text-lg font-bold text-gray-700">
                    Số lượng đơn: {incomeDetail.length}
                </h3>
                <h3 className="text-lg font-bold text-gray-700">
                    Tổng doanh thu:{' '}
                    {currencyFormatVND(
                        incomeDetail.reduce((total, item) => {
                            if (isNaN(item.origin_price)) {
                                return total
                            }
                            return total + (item.settlement_amount - item.origin_price)
                        }, 0)
                    )}
                </h3>
            </div>
            <div className="flex items-center justify-end py-2">
                <h3 className="text-lg font-bold text-gray-700">
                    Tổng VAT:{' '}
                    {currencyFormatVND(
                        incomeDetail.reduce((total, item) => {
                            if (isNaN(item.origin_price)) {
                                return total
                            }
                            return total + (item.settlement_amount - item.origin_price)
                        }, 0) * 0.015
                    )}
                </h3>
            </div>
            <table className="w-full shadow-md text-sm text-right text-gray-500 dark:text-gray-400 p-10">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 pl-4 text-left">
                            Order ID
                        </th>
                        <th scope="col" className="py-3">
                            Thời gian
                        </th>
                        <th scope="col" className="py-3">
                            Giá gốc
                        </th>
                        <th scope="col" className="py-3">
                            Giá bán
                        </th>
                        <th scope="col" className="py-3">
                            VAT 1.5%
                        </th>
                        <th scope="col" className="py-3 pr-4">
                            Doanh thu
                        </th>
                        {/* <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
            </th> */}
                    </tr>
                </thead>
                <tbody>
                    {incomeDetail.map((item) => (
                        <tr
                            key={item.order_id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td
                                scope="row"
                                className="py-4 pl-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.order_id}
                            </td>
                            <td className="py-4">{item.settlement_time}</td>
                            <td className="py-4">
                                {isNaN(item.origin_price)
                                    ? 'NaN'
                                    : currencyFormatVND(item.origin_price)}
                            </td>
                            <td className="py-4">
                                {isNaN(item.settlement_amount)
                                    ? 'NaN'
                                    : currencyFormatVND(item.settlement_amount)}
                            </td>
                            <td className="py-4">
                                {isNaN(item.settlement_amount)
                                    ? 'NaN'
                                    : currencyFormatVND(item.settlement_amount * 0.015)}
                            </td>
                            <td className="py-4 pr-4">
                                {isNaN(item.origin_price)
                                    ? 'NaN'
                                    : currencyFormatVND(item.settlement_amount - item.origin_price)}
                            </td>
                            {/* <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
