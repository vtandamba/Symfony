<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
class FormPortfolioType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, ['attr' => ['class' => 'inputTexte'], 'label' => 'form.nom'])
            ->add('email', EmailType::class, ['attr' => ['class' => 'inputTexte'], 'label' => 'form.email'])
            ->add('object', TextType::class, ['attr' => ['class' => 'inputTexte'], 'label' => 'form.sujet'])
            ->add('message', TextareaType::class, ['attr' => ['class' => 'inputArea'], 'label' => 'form.message'])
            ->add('submit', SubmitType::class,['attr' => ['class' => 'boutton'],  'label' => 'form.submit'])
            ->setAttribute('class', 'formulaire');
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
