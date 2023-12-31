import { Button, Modal } from "antd";
import React from "react";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <Modal
        title="Fatura Yazdır"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        width={800}
        footer={null}
      >
        <section className="py-20 bg-black">
          <div className="max-w-5xl mx-auto bg-white px-6">
            <article className=" overflow-hidden">
              <div className="logo my-6">
                <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
              </div>
              {/* Bill Details */}
              <div className="bill-details">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-12">
                  <div className="text-md text-slate-500">
                    <p className="font-bold text-slate-700">Fatura Detayı:</p>
                    <p> Unwrapperd</p>
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
                      <p>00057</p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 mt-2">
                        Veriliş Tarihi:
                      </p>
                      <p>21.11.2023</p>
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
              <div className="bill-table-area">
                <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5  text-left font-normal text-sm text-slate-700  md:pl-0 sm:table-cell hidden"
                      >
                        Görsel
                      </th>
                      <th
                        scope="col"
                        className="py-3.5  text-left font-normal text-sm text-slate-700  md:pl-0 sm:table-cell"
                      >
                        Başlık
                      </th>
                      <th
                        scope="col"
                        className="py-3.5  text-center font-normal text-sm text-slate-700  md:pl-0 sm:table-cell hidden"
                      >
                        Fiyat
                      </th>
                      <th
                        scope="col"
                        className="py-3.5  text-center font-normal  text-sm text-slate-700  md:pl-0 sm:table-cell hidden"
                      >
                        Adet
                      </th>
                      <th
                        scope="col"
                        colSpan={4}
                        className="py-3.5  text-end font-normal text-sm text-slate-700  md:pl-0 sm:table-cell "
                      >
                        Toplam
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-t border-slate-200">
                      <td className="py-4 sm:table-cell hidden ">
                        <img
                          className="w-12 h-12 object-cover"
                          src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                          alt=""
                        />
                      </td>
                      <td className="py-4">
                        <div className="flex flex-col">
                          <span className="font-medium ">Şalgam</span>
                          <span className="sm:hidden inline-block font-thin">
                            Birim Fiyat 5₺
                          </span>
                        </div>
                      </td>
                      <td className="py-4 text-center sm:table-cell hidden">
                        <span>5₺</span>
                      </td>
                      <td className="py-4  sm:text-center text-right sm:table-cell hidden">
                        <span>1</span>
                      </td>
                      <td colSpan={4} className="py-4 text-end">
                        <span>5.00</span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th
                        className="text-left sm:text-right pt-4 "
                        colSpan="4"
                        scope="row"
                      >
                        <span className="font-normal text-slate-700">
                          Ara Toplam
                        </span>
                      </th>
                      <th className="text-right pt-4" scope="row">
                        <span className="font-normal text-slate-700">57₺</span>
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
                        <span className="font-normal text-red-600">+4.88₺</span>
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
                          61.88₺
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
          <Button type="primary" size="large">
            Yazdır
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default PrintBill;
