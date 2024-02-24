<?php

namespace App\Controller;

use App\Form\FormPortfolioType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'app_homepage')]
    public function indexNolocate(Request $request, MailerInterface $mailer, TranslatorInterface $translator): Response
    {
        return $this->processFormAndRenderView($request, $mailer, $translator);
    }

    #[Route(' /{_locale<%app.supported_locales%>}/', name: 'app_default')]
    public function index(Request $request, MailerInterface $mailer, TranslatorInterface $translator): Response
    {
        return $this->processFormAndRenderView($request, $mailer, $translator);
    }

    private function processFormAndRenderView(Request $request, MailerInterface $mailer, TranslatorInterface $translator): Response
    {
        $form = $this->createForm(FormPortfolioType::class);

        // ------ gestion de l'envoie du mail ------- //
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Récupérez les données du formulaire
            $data = $form->getData();

            // Créez l'e-mail
            $email = (new Email())
                ->from($data['email'])
                ->to('tandambav@yahoo.com') // Adresse de destination
                ->subject($data['object'])
                ->text($data['message']);

            // Envoyez l'e-mail
            try {
                $mailer->send($email);
                // Réinitialisez les données du formulaire après un envoi réussi
                // Définir un message flash pour indiquer que le formulaire a été soumis avec succès
                $this->addFlash('success', 'Le formulaire a été soumis avec succès.');
                $form = $this->createForm(FormPortfolioType::class);

               // var_dump('ca marcheeee');
            } catch (TransportExceptionInterface $e) {
                // var_dump('nonnnnnnnnnnnnnnnn');
            }
        }

        return $this->render('defaults/index.html.twig', [
            'form' => $form->createView(),
            'prenom' => 'Victoria',
            'contenuBoutton' => 'Me Découvrir',
            'bouttonForm' => 'Valider',
            'alternatif' => ' competence',
            'imagePath' => '/asset/images/profil.png',
            'titreProjet' => ' Projet',
            'descriptionProjet' => ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ',
            'voirPlus' => ' voir plus',
            'contenuAlertSuccess' => 'Message bien envoyé',
            'etatSuccess'=>'success',
            'etatEchec'=>'error',
            'contenuAlertEchec' => 'Message non envoyé'
        ]);
    }
}
