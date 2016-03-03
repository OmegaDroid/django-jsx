import atexit
from time import sleep

from django.core.management import BaseCommand

from django_jsx.server.template_server import TemplateServer


class Command(BaseCommand):
    def __init__(self):
        super().__init__()

        self.server = TemplateServer()

    def handle(self, *args, **options):
        atexit.register(self.server.terminate())
        self.server.start()

        while True: sleep(1)
