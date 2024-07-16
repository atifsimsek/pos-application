import { Button, Modal } from "antd";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const PrintBill = ({ selectedBill, showPrintModal, setShowPrintModal }) => {
  const ref = useRef();

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  return (
    <>
      <Modal
        title="Fatura Yazdır"
        open={showPrintModal}
        onCancel={() => {
          setShowPrintModal(false);
        }}
        width={800}
        style={{ top: 20 }}
        footer={null}
      >
        <section
          className="py-20 bg-black print-area print:mt-[60px]"
          ref={ref}
        >
          <div className="max-w-5xl mx-auto bg-white px-6">
            <article className="overflow-hidden">
              <div className="logo my-6">
                <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
              </div>
              {/* Bill Details */}
              <div className="bill-details">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-12">
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Fatura Detayı:</p>
                    <p className="text-green-600">
                      {selectedBill?.customerName}
                    </p>
                    <p>Fake Street 123</p>
                    <p>San Javier</p>
                    <p>CA 1234</p>
                  </div>
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Fatura:</p>
                    <p>The Boring Company</p>
                    <p>Tesla Street 007</p>
                    <p>Frisco</p>
                    <p>CA 0000</p>
                  </div>
                  <div className="text-md text-slate-500">
                    <div>
                      <p className="font-bold text-slate-700">
                        Fatura Numarası:
                      </p>
                      <p>000{Math.floor(Math.random() * 100)}</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mt-2">
                        Veriliş Tarihi:
                      </p>
                      <p>
                        {new Date(selectedBill?.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-md sm:block hidden text-slate-500">
                    <div>
                      <p className="font-bold text-slate-700">Şartlar:</p>
                      <p>10 gün</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mt-2">Vade:</p>
                      <p>30.11.2023</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Table*/}
              <div className="bill-table-area mt-10">
                <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 text-left font-normal text-sm text-slate-700 md:pl-0 sm:table-cell hidden"
                      >
                        Görsel
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 text-left font-normal text-sm text-slate-700 md:pl-0 sm:table-cell"
                      >
                        Başlık
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 text-center font-normal text-sm text-slate-700 md:pl-0 sm:table-cell hidden"
                      >
                        Fiyat
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 text-center font-normal text-sm text-slate-700 md:pl-0 sm:table-cell hidden"
                      >
                        Adet
                      </th>
                      <th
                        scope="col"
                        colSpan={4}
                        className="py-3.5 text-end font-normal text-sm text-slate-700 md:pl-0 sm:table-cell"
                      >
                        Toplam
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedBill?.cardItems.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-t border-slate-200"
                      >
                        <td className="py-4 sm:table-cell hidden">
                          <img
                            className="w-12 h-12 object-cover"
                            src={item.img}
                            alt={item.title}
                          />
                        </td>
                        <td className="py-4">
                          <div className="flex flex-col">
                            <span className="font-medium">{item.title}</span>
                            <span className="sm:hidden inline-block font-thin">
                              Birim Fiyat {item?.price.toFixed(2)} ₺
                            </span>
                          </div>
                        </td>
                        <td className="py-4 text-center sm:table-cell hidden">
                          <span>{item?.price.toFixed(2)} ₺</span>
                        </td>
                        <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                          <span>{item?.quantity}</span>
                        </td>
                        <td colSpan={4} className="py-4 text-end">
                          <span>
                            {(item?.price * item?.quantity).toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th
                        className="text-left sm:text-right pt-4"
                        colSpan="4"
                        scope="row"
                      >
                        <span className="font-normal text-slate-700">
                          Ara Toplam
                        </span>
                      </th>
                      <th className="text-right pt-4" scope="row">
                        <span className="font-normal text-slate-700">
                          {selectedBill?.subTotal} ₺
                        </span>
                      </th>
                    </tr>
                    <tr>
                      <th
                        className="text-left pt-4 sm:text-right"
                        colSpan="4"
                        scope="row"
                      >
                        <span className="font-normal text-slate-700">KDV</span>
                      </th>
                      <th className="text-right pt-4" scope="row">
                        <span className="font-normal text-red-600">
                          {selectedBill?.tax} ₺
                        </span>
                      </th>
                    </tr>
                    <tr>
                      <th
                        className="text-left sm:text-right pt-4"
                        colSpan="4"
                        scope="row"
                      >
                        <span className="font-normal text-slate-700">
                          Genel Toplam
                        </span>
                      </th>
                      <th className="text-right pt-4" scope="row">
                        <span className="font-normal text-slate-700">
                          {selectedBill?.totalAmount} ₺
                        </span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
                <div className="py-9">
                  <div className="border-t pt-9 border-slate-200">
                    <p className="text-sm font-light text-slate-700">
                      Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                      Ödenmesi Yasası 0000'e göre, serbest çalışanların bu
                      süreden sonra borçların ödenmemesi durumunda 00.00 gecikme
                      ücreti talep etme hakkına sahip olduklarını ve bu noktada
                      bu ücrete ek olarak yeni bir fatura sunulacağını lütfen
                      unutmayın. Revize faturanın 14 gün içinde ödenmemesi
                      durumunda, vadesi geçmiş hesaba ek faiz ve %8 yasal oran
                      artı %0,5 Bank of England tabanı olmak üzere toplam %8,5
                      uygulanacaktır. Taraflar Kanun hükümleri dışında sözleşme
                      yapamazlar.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
        <div className="flex justify-end mt-4">
          <Button size="large" type="primary" onClick={handlePrint}>
            Yazdır
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default PrintBill;
