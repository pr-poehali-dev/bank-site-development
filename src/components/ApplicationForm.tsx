import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface ApplicationFormProps {
  type: 'card' | 'account' | 'credit' | 'deposit';
  trigger?: React.ReactNode;
}

const ApplicationForm = ({ type, trigger }: ApplicationFormProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    phone: '',
    email: '',
    productType: '',
    amount: '',
    agreed: false
  });

  const titles = {
    card: 'Заявка на дебетовую карту',
    account: 'Заявка на открытие счёта',
    credit: 'Заявка на кредит',
    deposit: 'Заявка на вклад'
  };

  const descriptions = {
    card: 'Заполните форму, и мы оформим карту для вас',
    account: 'Откройте счёт онлайн за 5 минут',
    credit: 'Получите решение по кредиту за 2 минуты',
    deposit: 'Откройте вклад с выгодной ставкой'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreed) {
      toast({
        title: 'Ошибка',
        description: 'Необходимо согласие на обработку персональных данных',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    
    setOpen(false);
    setFormData({
      lastName: '',
      firstName: '',
      middleName: '',
      phone: '',
      email: '',
      productType: '',
      amount: '',
      agreed: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className="font-semibold">
            Оформить заявку
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{titles[type]}</DialogTitle>
          <DialogDescription>{descriptions[type]}</DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lastName">Фамилия *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
                placeholder="Иванов"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="firstName">Имя *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
                placeholder="Иван"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="middleName">Отчество</Label>
              <Input
                id="middleName"
                value={formData.middleName}
                onChange={(e) => handleInputChange('middleName', e.target.value)}
                placeholder="Иванович"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                placeholder="+7 (999) 123-45-67"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                placeholder="example@mail.ru"
              />
            </div>
          </div>

          {type === 'card' && (
            <div className="space-y-2">
              <Label htmlFor="productType">Тип карты *</Label>
              <Select value={formData.productType} onValueChange={(value) => handleInputChange('productType', value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тип карты" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="black">Black</SelectItem>
                  <SelectItem value="platinum">Platinum</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {type === 'credit' && (
            <div className="space-y-2">
              <Label htmlFor="amount">Желаемая сумма кредита *</Label>
              <Input
                id="amount"
                type="number"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
                required
                placeholder="500000"
                min="50000"
                max="5000000"
              />
            </div>
          )}

          {type === 'deposit' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productType">Тип вклада *</Label>
                <Select value={formData.productType} onValueChange={(value) => handleInputChange('productType', value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип вклада" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="savings">Накопительный</SelectItem>
                    <SelectItem value="maximum">Максимальный доход</SelectItem>
                    <SelectItem value="pension">Пенсионный</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Сумма вклада *</Label>
                <Input
                  id="amount"
                  type="number"
                  value={formData.amount}
                  onChange={(e) => handleInputChange('amount', e.target.value)}
                  required
                  placeholder="100000"
                  min="1000"
                />
              </div>
            </div>
          )}

          <div className="flex items-start space-x-2">
            <Checkbox
              id="agreed"
              checked={formData.agreed}
              onCheckedChange={(checked) => handleInputChange('agreed', checked as boolean)}
            />
            <Label htmlFor="agreed" className="text-sm font-normal leading-tight cursor-pointer">
              Я согласен на обработку персональных данных и принимаю условия пользовательского соглашения
            </Label>
          </div>

          <div className="flex gap-4">
            <Button type="submit" size="lg" className="flex-1 font-semibold">
              Отправить заявку
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={() => setOpen(false)}>
              Отмена
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationForm;
