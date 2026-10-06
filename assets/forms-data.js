// Content for both forms. Every guest-facing string is { en, ar }.
// Shoot details from the Red Palace Launch Film operational requirements doc.
(function () {
  const bi = (en, ar) => ({ en, ar });
  const opt = (value, en, ar) => ({ value, label: bi(en, ar) });

  const shared = {
    defaultLang: 'ar',
    title: bi('Red Palace Launch Film', 'فيلم إطلاق القصر الأحمر'),
    brief: {
      body: bi(
        'A cinematic launch film for the reopening of the Red Palace, shot across the Palace over two days. The Palace is a restored heritage property, so production is non-invasive: please follow the location team\'s instructions on access, routes and handling at all times.',
        'فيلم سينمائي لإطلاق القصر الأحمر بعد إعادة افتتاحه، والتصوير داخل أرجاء القصر على مدى يومين. القصر مبنى تراثي مرمّم، فالعمل فيه بدون أي أثر: نرجو الالتزام بتعليمات فريق الموقع في الدخول والمسارات والتعامل مع المقتنيات.',
      ),
      facts: [
        { label: bi('Shoot days', 'أيام التصوير'), value: bi('18–19 October 2026', '18–19 أكتوبر 2026') },
        { label: bi('Prep day', 'يوم التجهيز'), value: bi('17 October (to confirm)', '17 أكتوبر (بانتظار التأكيد)') },
        { label: bi('Location', 'الموقع'), value: bi('The Red Palace, Old Riyadh', 'القصر الأحمر، الرياض القديمة') },
        { label: bi('Call time', 'وقت الحضور'), value: bi('Shared after the recce', 'يُرسل بعد المعاينة') },
      ],
    },
    footer: bi('Internal Captains form — Red Palace launch film', 'نموذج داخلي خاص بكابتنز - فيلم إطلاق القصر الأحمر'),
  };

  const crew = {
    ...shared,
    kind: 'crew',
    brandtag: 'CREW REGISTRATION',
    subtitle: bi('Crew registration', 'تسجيل طاقم المشروع'),
    heading: bi('Crew details', 'بيانات الطاقم'),
    section: bi('Your details', 'بيانات الفرد'),
    another: bi('Register another person', 'تسجيل فرد آخر'),
    brief: {
      ...shared.brief,
      body: bi(
        'A cinematic launch film for the Red Palace, shot across the Palace over two days. The Palace is a restored heritage property, so production is non-invasive: please follow the location team\'s instructions on access, routes and handling at all times. Taking photos or videos is strictly prohibited, per higher directives.',
        'فيلم سينمائي لإطلاق القصر الأحمر والتصوير داخل أرجاء القصر على مدى يومين. القصر مبنى تراثي مرمّم، فالعمل فيه بدون أي أثر: نرجو الالتزام بتعليمات فريق الموقع في الدخول والمسارات والتعامل مع المقتنيات، ويمنع التصوير منعًا تامًا وفق توجيهات عليا.',
      ),
    },
    formIntro: bi(
      'Please fill in your details and upload a clear photo or scan of your ID. We need it for site access permits.',
      'نحتاج منك تعبئة بياناتك ورفع صورة واضحة من هويتك، عشان تصاريح الدخول للموقع.',
    ),
    fields: [
      { key: 'full_name', type: 'text', width: 'half', required: true, label: bi('Full name (as on ID)', 'الاسم الكامل (كما في الهوية)') },
      {
        key: 'role', type: 'text', width: 'half', required: true,
        label: bi('Role / department', 'الدور / القسم'),
        placeholder: bi('e.g. Gaffer, Art department', 'مثال: إضاءة، قسم الديكور'),
      },
      { key: 'nationality', type: 'text', width: 'half', required: true, label: bi('Nationality', 'الجنسية') },
      { key: 'id_number', type: 'text', width: 'half', required: true, label: bi('National ID / Iqama / passport number', 'رقم الهوية / الإقامة / جواز السفر') },
      { key: 'mobile', type: 'tel', width: 'half', required: true, label: bi('Mobile number', 'رقم الجوال'), placeholder: bi('05xxxxxxxx', '05xxxxxxxx') },
      { key: 'email', type: 'email', width: 'half', required: true, label: bi('Email', 'البريد الإلكتروني') },
      {
        key: 'id_file', type: 'file', width: 'full', required: true,
        label: bi('Upload your ID', 'ارفع صورة الهوية'),
        placeholder: bi('Photo or PDF, up to 8 MB', 'صورة أو PDF، بحد أقصى 8 ميجابايت'),
      },
      {
        key: 'has_car', type: 'select', width: 'full', required: true,
        label: bi('Will you enter the site by car?', 'هل ستدخل الموقع بسيارة؟'),
        options: [opt('yes', 'Yes', 'نعم'), opt('no', 'No', 'لا')],
      },
      {
        key: 'plate_number', type: 'text', width: 'half', required: true,
        label: bi('Car plate number', 'رقم لوحة السيارة'),
        showIf: { field: 'has_car', equals: 'yes' },
      },
      {
        key: 'car_type', type: 'text', width: 'half', required: true,
        label: bi('Car type', 'نوع السيارة'),
        placeholder: bi('e.g. sedan, van, truck', 'مثال: سيدان، فان، شاحنة'),
        showIf: { field: 'has_car', equals: 'yes' },
      },
    ],
    thankYou: bi(
      'Thank you, we have received your details and ID. Production will share the call sheet with you after the recce.',
      'يعطيك العافية، استلمنا بياناتك وصورة الهوية. فريق الإنتاج بيرسل لك جدول التصوير بعد المعاينة.',
    ),
  };

  const guest = {
    ...shared,
    kind: 'guest',
    brandtag: 'GUEST REGISTRATION',
    subtitle: bi('Guest registration', 'تسجيل الضيوف'),
    heading: bi('Guest details', 'بيانات الضيف'),
    section: bi('Your details', 'بياناتك'),
    another: bi('Register another guest', 'تسجيل ضيف آخر'),
    formIntro: bi(
      'Because your experience matters to us from the moment you arrive, please fill in your access, reception, transport and hospitality details.',
      'لأن تجربتك تهمنا من لحظة الوصول، نحتاج منك تعبئة المعلومات الخاصة بالدخول، الاستقبال، والتنقل والضيافة.',
    ),
    fields: [
      {
        key: 'visitor_type', type: 'select', width: 'half', required: true,
        label: bi('You are joining as', 'صفتك معنا'),
        options: [opt('client', 'Client', 'عميل'), opt('guest', 'Guest', 'ضيف')],
      },
      { key: 'full_name', type: 'text', width: 'half', required: true, label: bi('Full name', 'الاسم الكامل') },
      { key: 'id_number', type: 'text', width: 'half', required: true, label: bi('National ID or passport number', 'رقم الهوية أو جواز السفر') },
      { key: 'mobile', type: 'tel', width: 'half', required: true, label: bi('Mobile number', 'رقم الجوال') },
      { key: 'email', type: 'email', width: 'full', required: false, label: bi('Email', 'البريد الإلكتروني') },
      {
        key: 'arrival', type: 'pills', width: 'full', required: true,
        label: bi('How will you arrive?', 'كيف ناوي توصل؟'),
        options: [opt('pickup', 'Pick-up', 'Pick-up'), opt('own_car', 'My own car', 'بسيارتي')],
      },
      {
        key: 'pickup_location', type: 'text', width: 'full', required: true,
        label: bi('Pick-up location / map link', 'موقع الاستلام / Location Link'),
        placeholder: bi('Paste a map link or write the address clearly', 'حط رابط الـLocation أو اكتب العنوان بشكل واضح'),
        showIf: { field: 'arrival', equals: 'pickup' },
      },
      {
        key: 'plate_number', type: 'text', width: 'half', required: true,
        label: bi('Plate number', 'رقم اللوحة'),
        showIf: { field: 'arrival', equals: 'own_car' },
      },
      {
        key: 'car_type', type: 'text', width: 'half', required: true,
        label: bi('Car type', 'نوع السيارة'),
        placeholder: bi('e.g. SUV, sedan', 'مثال: SUV، سيدان'),
        showIf: { field: 'arrival', equals: 'own_car' },
      },
      {
        key: 'drink', type: 'pills', width: 'full', required: true,
        label: bi('Your preferred drink?', 'وش مشروبك المفضل؟'),
        options: [
          opt('coffee', 'Coffee', 'قهوة'),
          opt('tea', 'Tea', 'شاي'),
          opt('any', 'Happy with anything', 'مرن مع كل الخيارات'),
          opt('decaf', 'Decaf', 'منزوع الكافيين'),
        ],
      },
      {
        key: 'food', type: 'pills', width: 'full', required: true,
        label: bi('Food preference?', 'وش يناسبك بالأكل؟'),
        options: [
          opt('diet', 'Diet', 'دايت'),
          opt('regular', 'Regular', 'عادي'),
          opt('vegetarian', 'Vegetarian', 'Vegetarian'),
          opt('vegan', 'Vegan', 'Vegan'),
        ],
      },
      {
        key: 'special_requests', type: 'textarea', width: 'full', required: false,
        label: bi('Any notes or special requests for the location?', 'فيه أي ملاحظات أو طلبات خاصة بالموقع؟'),
        placeholder: bi(
          'e.g. food allergies, access requirements, special arrangements',
          'مثلاً: حساسية غذائية، متطلبات دخول، ترتيبات خاصة أو أي ملاحظة تهمنا',
        ),
      },
    ],
    thankYou: bi(
      'We have received all your details. We will send you the timings and driver details if you chose pick-up.',
      'استلمنا كافة المعلومات. سيتم تزويدك بالأوقات وتفاصيل السائق في حال اختيار خدمة الPick-up.',
    ),
  };

  window.CAPTAINS_FORMS = { crew, guest };
})();
