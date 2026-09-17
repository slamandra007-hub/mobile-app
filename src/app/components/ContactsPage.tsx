import { Phone } from 'lucide-react';

export function ContactsPage() {
  const phoneNumbers = [
    { id: 1, number: '+380 67 123 45 67', label: 'Основний' },
    { id: 2, number: '+380 93 987 65 43', label: 'Додатковий' },
    { id: 3, number: '+380 50 555 44 33', label: 'Доставка' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 p-4">
      <div className="max-w-md mx-auto pt-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-600 rounded-full mb-4">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">Контакти</h2>
            <p className="text-gray-600">Замовте через дзвінок</p>
          </div>

          <div className="space-y-4">
            {phoneNumbers.map((contact) => (
              <a
                key={contact.id}
                href={`tel:${contact.number.replace(/\s/g, '')}`}
                className="block bg-gradient-to-r from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 rounded-xl p-5 transition-all shadow-md hover:shadow-lg border-2 border-yellow-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{contact.label}</p>
                    <p className="text-xl font-semibold text-gray-900">{contact.number}</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-3">Графік роботи</h3>
            <div className="space-y-2 text-gray-600">
              <p>Пн-Пт: 9:00 - 22:00</p>
              <p>Сб-Нд: 10:00 - 23:00</p>
            </div>
          </div>

          <div className="mt-6 p-6 bg-yellow-50 rounded-xl border-2 border-yellow-200">
            <p className="text-sm text-gray-700 text-center">
              Зателефонуйте нам, і ми з радістю приймемо ваше замовлення!
              Середній час доставки: 30-45 хвилин.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
